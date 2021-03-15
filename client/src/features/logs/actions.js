import * as actionType from "./types";
import { api } from "../../api";


const setLogs = (logs) => ({ type: actionType.SET_DEVICE_LOGS, payload: logs });

export const getDeviceLogs = (id) => (dispatch) => (
    api.getDeviceLogs(id)
        .then(
            ({ data }) => {
                console.log(data)
                dispatch(setLogs(data));
                dispatch({ type: actionType.GET_DEVICE_LOGS_SUCCESS });
            }
        )
        .catch(
            (error) => {
                dispatch({ type: actionType.GET_DEVICE_LOGS_FAIL });
                //+toast
            }
        )
)