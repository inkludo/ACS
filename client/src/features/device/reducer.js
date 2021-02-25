import * as actionType from "./types";

const initialState = {
    device: {},
    users: [],
    open: false,
    currentId: null,
    currentUser: {}
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_DEVICE:
            return {
                ...state,
                device: { ...state.device, ...payload[0] }
            }
        case actionType.SET_USERS:
            return {
                ...state,
                users: [...state.users, ...payload]
            }
        case actionType.REMOVE_DEVICE:
            return {
                ...initialState
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