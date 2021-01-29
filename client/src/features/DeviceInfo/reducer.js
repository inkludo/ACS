import * as actionType from "./types";

const initialState = {
    device: {},
    users: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_DEVICE:
            return {
                ...state, device: { ...state.device, ...payload[0] }
            }
        case actionType.SET_USERS:
            return {
                ...state, users: [...state.users, ...payload]
            }
        default: {
            return state;
        }
    }
};

export default reducer;