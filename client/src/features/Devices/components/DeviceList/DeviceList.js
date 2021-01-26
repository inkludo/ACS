import React, { useState } from 'react';
import MaterialTable from 'material-table';

const DeviceList = () => {

    const [table, setTable] = useState({
        columns: [
            { title: '№', field: 'number', type: 'numeric' },
            { title: 'Device', field: 'device_id' },
            { title: 'Room', field: 'room' },
            { title: '', field: '' },
        ],
        data: [],
    });

    return (
        <MaterialTable
            title="List of devices"
            columns={table.columns}
            data={table.data}
        />
    );
}

export default DeviceList;
