import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DeviceUserList from '../DeviceUserList/DeviceUserList';

import { getDeviceInfo } from '../../actions';
import { getDevice } from '../../selectors';


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


const DeviceInfoCard = ({ id, users }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const device = useSelector(getDevice);
    const { device_id, device_name } = device;



    useEffect(() => {
        dispatch(getDeviceInfo(id));
    }, [dispatch, id]);
    //need to add shadow box
    return (
        <Card className={classes.root}>
            <Box className={classes.box}>
                <CardHeader
                    className={classes.header}
                    title={device_id}
                    subheader={'Room: ' + device_name}
                />
                <CardActions>
                    <Box className={classes.boxButtons} component="span" >
                        <Button size='small' className={classes.button} variant='outlined' color="primary">Logs</Button>
                        <Button size='small' variant='outlined' color="secondary">Delete</Button>
                    </Box>
                </CardActions>

            </Box>
            <hr />
            <CardContent>
                <DeviceUserList users={users} />
            </CardContent>
        </Card >
    );
}



export default DeviceInfoCard;