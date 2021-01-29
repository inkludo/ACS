import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { getDeviceUsers } from '../../actions';
import { getUsers } from '../../selectors';
import { useParams } from 'react-router-dom';


const DeviceUserList = () => {

    const dispatch = useDispatch();
    const id = useParams().id;
    const users = useSelector(getUsers);

    useEffect(() => {
        dispatch(getDeviceUsers(id));
    }, [dispatch, id]);

    const columns = [
        { title: '№', field: 'number', render: (rowData) => rowData.tableData.id + 1 },
        { title: 'Name', field: 'name' },
        { title: 'RFID', field: 'rfid' },
        { title: 'Role', field: 'role' },
        { title: 'Active', field: 'active' },
        {
            render: () =>
                <Button
                    onClick={() => console.log('click')}
                    variant="outlined"
                    size="small"
                    color="primary">
                    Edit
                </Button>
        }
    ];


    return (

        <MaterialTable
            data={users}
            columns={columns}
            title="List of users"
        />

    )
}

export default DeviceUserList;
