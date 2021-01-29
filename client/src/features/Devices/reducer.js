import * as actionType from "./types";

const initialState = {
    devices: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_DEVICES:
            return {
                ...state, devices: [...state.devices, ...payload]
            }
        default: {
            return state;
        }
    }
};

export default reducer;