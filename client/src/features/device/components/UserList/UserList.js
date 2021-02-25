import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../selectors';
import { useParams } from 'react-router-dom';
import { openDialog, getDeviceUsers } from '../../actions';



const UserList = () => {

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
            onClick: () => dispatch(openDialog())
        }
    ];


    return (
        <>
            <MaterialTable
                data={users}
                columns={columns}
                title="List of users"
                actions={actions}
            />

        </>
    )
}

export default UserList;
