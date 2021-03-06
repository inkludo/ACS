import * as actionType from "./types";

const initialState = {
    devices: [],
    open: false
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_DEVICES:
            return {
                ...state,
                devices: payload
            }
        case actionType.DELETE_DEVICE: {
            const { removeId } = payload;
            const devices = state.devices.filter(({ id }) => id !== removeId);
            return {
                ...state,
                devices
            }
        }
        case actionType.ADD_DEVICE: {
            const { device } = payload;
            const devices = [...state.devices, device];
            return {
                ...state,
                devices
            }
        }
        case actionType.OPEN_DIALOG:
            return {
                ...state,
                open: true
            }
        case actionType.CLOSE_DIALOG:
            return {
                ...state,
                open: false
            }
        default: {
            return state;
        }
    }
};

export default reducer;