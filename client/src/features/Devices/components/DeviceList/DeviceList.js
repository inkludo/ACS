import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import { getAllDevices, openDialog } from '../../actions';
import { getDevices } from '../../selectors';

const DeviceList = () => {
    const dispatch = useDispatch();
    const devices = useSelector(getDevices);

    useEffect(() => {
        dispatch(getAllDevices());
    }, [dispatch]);

    let history = useHistory();

    const columns = [
        { title: '№', field: 'number', render: (rowData) => rowData.tableData.id + 1 },
        { title: 'Device', field: 'device_name' },
        { title: 'Room', field: 'device_room' },
        {
            render: rowData =>
                <Button
                    onClick={() => history.push(`/device/${rowData._id}`)}
                    variant="outlined"
                    size="small"
                    color="primary">
                    Open
            </Button>
        }
    ];

    const actions = [
        {
            icon: 'add',
            tooltip: 'Add Device',
            isFreeAction: true,
            onClick: () => dispatch(openDialog())
        }
    ];



    return (
        <MaterialTable
            title="List of devices"
            columns={columns}
            data={devices}
            actions={actions}
        />
    )
}

export default DeviceList;
