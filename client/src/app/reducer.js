import * as actionType from "./types";

const initialState = {
    activePage: null,
    popout: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_ACTIVE_PAGE: {
            const { page } = payload;

            return {
                ...state,
                activePage: page,
            };
        }

        case actionType.SET_POPOUT: {
            const { popout } = payload;

            return {
                ...state,
                popout,
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;