import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from '../selectors';
import { useParams } from 'react-router-dom';
import { getDeviceLogs } from '../actions';




const LogList = () => {

    const dispatch = useDispatch();
    const id = useParams().id;
    const logs = useSelector(getLogs);

    useEffect(() => {
        dispatch(getDeviceLogs(id));
    }, [dispatch, id]);

    console.log(logs)

    const columns = [
        { title: '№', field: 'number', render: (rowData) => rowData.tableData.id + 1 },
        { title: 'Name', field: 'name' },
        { title: 'RFID', field: 'rfid' },
        { title: 'Role', field: 'role' },
        { title: 'Date', field: 'date' },
        { title: 'Successfully', field: 'completed' },
        {
            render: () =>
                <Button
                    onClick={() => console.log("1")}
                    variant="outlined"
                    size="small"
                    color="primary">
                    Edit
                </Button>
        }
    ];

    const actions = [
        {
            icon: 'add',
            tooltip: 'Add new user',
            isFreeAction: true,
            onClick: () => console.log('1')
        }
    ];


    return (
        <>
            <MaterialTable
                data={logs}
                columns={columns}
                title="Device logs"
                actions={actions}
            />
        </>
    )
}

export default LogList;
