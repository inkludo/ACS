import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Container from '@material-ui/core/Container';
import { closeDialog } from '../../actions';
import { getDialogStatus } from '../../selectors';

import Dialog from '../../../../components/Dialog';
import DeviceForm from '../../components/DeviceForm';
import DeviceList from '../../components/DeviceList';

const Devices = () => {
    const dispatch = useDispatch();
    let isOpenDialog = useSelector(getDialogStatus);

    return (
        <Container maxWidth='md'>
            <DeviceList />
            <Dialog
                isOpen={isOpenDialog}
                handleClose={() => dispatch(closeDialog())}
                isForm={true}
                title={`Add new device`}
            >
                <DeviceForm onClose={() => dispatch(closeDialog())} />
            </Dialog>
        </Container>
    )
}

export default Devices;
