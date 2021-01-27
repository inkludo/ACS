import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Container from '@material-ui/core/Container';

import DeviceList from '../../components/DeviceList/DeviceList';
import { getAllDevices } from '../../actions';
import { getDevices } from '../../selectors';



const Devices = () => {
    const dispatch = useDispatch();
    const devices = useSelector(getDevices);


    useEffect(() => {
        dispatch(getAllDevices());
    }, [dispatch]);


    return (
        <Container>
            <DeviceList devices={devices} />
        </Container>
    )
}

export default Devices;
