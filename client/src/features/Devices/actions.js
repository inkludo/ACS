import * as actionType from "./types";
import { api } from "../../api";

const setDevices = (devices) => ({ type: actionType.SET_DEVICES, payload: devices })

export const getAllDevices = () => (dispatch) => {
    api.getAllDevices()
        .then(
            ({ data }) => {
                console.log(data)
                dispatch({ type: actionType.GET_ALL_DEVICES_SUCCESS });
                dispatch(setDevices(data));
            }
        )
        .catch(
            (error) => {
                dispatch({ type: actionType.GET_ALL_DEVICES_FAIL });
                //+toast
            }
        )
}

