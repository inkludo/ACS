import * as actionType from "./types";
import { api } from "../../api";

const setDevices = (devices) => ({ type: actionType.SET_DEVICES, payload: devices });
const addDevice = (device) => ({ type: actionType.ADD_DEVICE, payload: device })
const removeDevice = (removeId) => ({ type: actionType.DELETE_DEVICE, payload: removeId });
export const openDialog = () => ({ type: actionType.OPEN_DIALOG });
export const closeDialog = () => ({ type: actionType.CLOSE_DIALOG });


export const getAllDevices = () => (dispatch) => (
    api.getAllDevices()
        .then(
            ({ data }) => {
                dispatch({ type: actionType.GET_ALL_DEVICES_SUCCESS });
                dispatch(setDevices(data));
            }
        )
        .catch(
            () => {
                dispatch({ type: actionType.GET_ALL_DEVICES_FAIL });
                //+toast
            }
        )
);


export const deleteDevice = (id) => (dispatch) => (
    api.deleteDevice(id)
        .then(() => {
            dispatch({ type: actionType.DELETE_DEVICE_SUCCESS });
            dispatch(removeDevice(id))
        }
        )
        .catch(() => dispatch({ type: actionType.DELETE_DEVICE_FAIL })
            //+toast
        )
);

export const createDevice = (values) => (dispatch) => (
    api.createDevice(values)
        .then(({ data: { device } }) => {
            dispatch(addDevice({ device }));
            dispatch({ type: actionType.CREATE_DEVICE_SUCCESS });
        })
        .catch(() => dispatch({ type: actionType.CREATE_DEVICE_FAIL }))
);





