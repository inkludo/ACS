import * as actionType from "./types";

export const alertSuccess = (message) => ({ type: actionType.ALERT_SUCCESS, message });
export const alertError = (message) => ({ type: actionType.ALERT_ERROR, message });
export const alertClear = () => ({ type: actionType.ALERT_CLEAR });