import * as actionType from "./types";
import { api } from "../../api";

const setDevice = (device) => ({ type: actionType.SET_DEVICE, payload: device });
const setUsers = (users) => ({ type: actionType.SET_USERS, payload: users })

export const getDeviceInfo = (id) => (dispatch) => {
    api.getDevice(id)
        .then(
            ({ data }) => {
                console.log(data)
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
}


export const getDeviceUsers = (id) => (dispatch) => {
    api.getDeviceUsers(id)
        .then(
            ({ data }) => {
                dispatch({ type: actionType.GET_DEVICE_USERS_SUCCESS });
                dispatch(setUsers(data));
            }
        )
        .catch(
            (error) => {
                dispatch({ type: actionType.GET_DEVICE_USERS_FAIL });
                //+toast
            }
        )
}


