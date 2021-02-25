import * as actionType from "./types";
import { api } from "../../api";
import { deleteDevice as deleteItem } from "../devices/actions";

const setDevice = (device) => ({ type: actionType.SET_DEVICE, payload: device });
const setUsers = (users) => ({ type: actionType.SET_USERS, payload: users });
const removeDevice = () => ({ type: actionType.REMOVE_DEVICE });

export const openDialog = () => ({ type: actionType.OPEN_DIALOG });
export const closeDialog = () => ({ type: actionType.CLOSE_DIALOG });


export const getDeviceInfo = (id) => (dispatch) => (
    api.getDevice(id)
        .then(
            ({ data }) => {
                dispatch({ type: actionType.GET_DEVICE_SUCCESS });
                dispatch(setDevice(data));
            }
        )
        .catch(
            (error) => {
                dispatch({ type: actionType.GET_DEVICE_FAIL });
                //+toast
            }
        )
)


export const getDeviceUsers = (id) => (dispatch) => (
    api.getDeviceUsers(id)
        .then(
            ({ data }) => {
                dispatch(setUsers(data));
                dispatch({ type: actionType.GET_DEVICE_USERS_SUCCESS });
            }
        )
        .catch(
            (error) => {
                dispatch({ type: actionType.GET_DEVICE_USERS_FAIL });
                //+toast
            }
        )
)

export const deleteDevice = (id) => (dispatch) => dispatch(deleteItem(id)).then(() => dispatch(removeDevice()))

