import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

const DeviceList = ({ devices }) => {

    let history = useHistory();

    const columns = [
        { title: '№', field: 'number', render: (rowData) => rowData.tableData.id + 1 },
        { title: 'Device', field: 'device_id' },
        { title: 'Room', field: 'device_name' },
        {
            render: rowData =>
                <Button
                    onClick={() => history.push(`/device/${rowData._id}`)}
                    variant="contained"
                    size="small"
                    color="primary">
                    Open
                </Button>
        }
    ];

    return (
        devices.length > 0 ?
            (<MaterialTable
                title="List of devices"
                columns={columns}
                data={devices}

            />) : 'Loading'
    );
}

export default DeviceList;
