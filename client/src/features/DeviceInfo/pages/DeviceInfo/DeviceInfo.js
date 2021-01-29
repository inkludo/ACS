import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '@material-ui/core/Container'
import DeviceInfoCard from '../../components/DeviceInfoCard/DeviceInfoCard';

const DeviceInfo = () => {

    const id = useParams().id;

    return (
        <Container maxWidth='md'>
            <DeviceInfoCard id={id} />
        </Container>
    )
}

export default DeviceInfo;
