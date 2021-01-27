import MaterialTable from 'material-table';
import React from 'react';


const DeviceUserList = () => {
    const columns = [
        { title: '№', field: 'number', render: (rowData) => rowData.tableData.id + 1 },
        { title: 'Device', field: 'device_id' },
        { title: 'Room', field: 'device_name' },

    ];
    return (

        <MaterialTable

        />

    )
}

export default DeviceUserList;
