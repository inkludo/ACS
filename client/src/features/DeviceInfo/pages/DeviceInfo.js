import React from 'react';
import Container from '@material-ui/core/Container'
import DeviceInfoCard from '../components/DeviceInfoCard/DeviceInfoCard';

const DeviceInfo = () => {
    return (
        <Container maxWidth='md'>
            <DeviceInfoCard />
        </Container>
    )
}

export default DeviceInfo;
