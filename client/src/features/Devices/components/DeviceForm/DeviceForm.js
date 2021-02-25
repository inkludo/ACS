import React from 'react';
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Button, Box } from "@material-ui/core";
import { createDevice, closeDialog } from '../../actions';




const validationSchema = yup.object({
    device_name: yup
        .string('Enter device name ')
        .min(2, 'Name should be of minimum 2 characters length')
        .required('Name is required'),
    device_room: yup
        .string('Enter room name')
        .min(2, 'Room name should be of minimum 2 characters length')
        .required('Room name is required'),
});


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1)
        }
    },
    box: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& button': {
            marginLeft: 15
        }
    },
}))

const DeviceForm = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            device_name: '',
            device_room: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(createDevice(values)).finally(() => dispatch(closeDialog()))
        },
    });

    return (
        <div>
            <form className={classes.root} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="device_name"
                    name="device_name"
                    label="Name"
                    value={formik.values.device_name}
                    variant='outlined'
                    onChange={formik.handleChange}
                    error={formik.touched.device_name && Boolean(formik.errors.device_name)}
                    helperText={formik.touched.device_name && formik.errors.device_name}
                />
                <TextField
                    fullWidth
                    id="device_room"
                    name="device_room"
                    label="Room"
                    type="text"
                    variant='outlined'
                    value={formik.values.device_room}
                    onChange={formik.handleChange}
                    error={formik.touched.device_room && Boolean(formik.errors.device_room)}
                    helperText={formik.touched.device_room && formik.errors.device_room}
                />

                <Box className={classes.box}>
                    <Button type='submit' variant='outlined' color='primary' size='medium'>Submit</Button>
                    <Button onClick={() => dispatch(closeDialog())} variant='contained' color='secondary' size='medium'>Close</Button>
                </Box>
            </form>
        </div>
    );
};

export default DeviceForm;

