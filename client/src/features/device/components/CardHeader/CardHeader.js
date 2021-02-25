import React, { useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Box, CardHeader as MuiCardHeader, Button, CardActions, DialogActions } from '@material-ui/core';
import { getDevice, getDialogStatus } from '../../selectors';
import { getDeviceInfo, deleteDevice, openDialog, closeDialog } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '../../../../components/Dialog'



const useStyles = makeStyles({
    button: {
        marginBottom: '1vh',
    },
    box: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    boxButtons: {
        display: 'flex',
        flexDirection: 'column',
    }
});


const CardHeader = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const id = useParams().id;
    const history = useHistory();

    const isOpenDialog = useSelector(getDialogStatus);
    const device = useSelector(getDevice);

    const { device_name, device_room } = device;

    useEffect(() => {
        dispatch(getDeviceInfo(id));
    }, [dispatch, id]);

    const deleteItem = useCallback(() => {
        dispatch(deleteDevice(id)).finally(() => history.push('/'));
    }, [dispatch, id, history]);

    return (
        <Box className={classes.box}>
            <MuiCardHeader
                className={classes.header}
                title={device_name}
                subheader={'Room: ' + device_room}
            />
            <CardActions>
                <Box className={classes.boxButtons} component="span" >
                    <Button size='small' onClick={() => console.log('id')} className={classes.button} variant='outlined' color="primary">Logs</Button>
                    <Button size='small' onClick={() => dispatch(openDialog())} variant='outlined' color="secondary">Delete</Button>
                </Box>
            </CardActions>

            <Dialog
                isOpen={isOpenDialog}
                handleClose={() => dispatch(closeDialog())}
                title={`You really want to delete ${device_name}?`}
            >
                <DialogActions>
                    <Button onClick={() => dispatch(deleteItem)}>Delete</Button>
                    <Button onClick={() => dispatch(closeDialog())}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default CardHeader;
