import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DeviceUserList from '../DeviceUserList/DeviceUserList';

const useStyles = makeStyles({

    boxBtn: {
        display: 'flex',
        flexDirection: 'column',
    },
    btn: {
        marginBottom: '1vh',
    },
    box: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
    }
});


const DeviceInfoCard = () => {
    const classes = useStyles();

    //need to add shadow box
    return (
        <Card className={classes.root}>
            <Box className={classes.box}>
                <CardHeader
                    className={classes.header}
                    title="NodeMCU-01"
                    subheader="Room: Kitchen"
                />
                <CardActions>
                    <Box className={classes.boxBtn} component="span" >
                        <Button size='small' className={classes.btn} variant='outlined' color="primary">Logs</Button>
                        <Button size='small' variant='outlined' color="secondary">Delete</Button>
                    </Box>
                </CardActions>

            </Box>
            <hr />
            <CardContent>
                <DeviceUserList />
            </CardContent>
        </Card>
    );
}



export default DeviceInfoCard;