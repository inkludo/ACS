import * as actionType from "./types";

const initialState = {
    token: null,
    userId: null,
    isAuthenticated: false
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SIGN_IN_SUCCESS:
            const { token, userId } = payload;
            return {
                ...state,
                token: token,
                userId: userId,
                isAuthenticated: true
            }
        case actionType.AUTH_LOGOUT:
            return {
                ...state, token: null, userId: null, isAuthenticated: false
            }
        default: {
            return state;
        }
    }
};

export default reducer;