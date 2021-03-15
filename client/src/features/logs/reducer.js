import * as actionType from "./types";

const initialState = {
    logs: [],
    currentId: null,
    currentUser: {}
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_DEVICE_LOGS:
            return {
                ...state,
                logs: [...state.logs, ...payload]
            }
        default: {
            return state;
        }
    }
};

export default reducer;