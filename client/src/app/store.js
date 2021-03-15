import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import app from '../app/reducer';
import auth from '../features/auth/reducer';
import devices from '../features/devices/reducer';
import device from '../features/device/reducer';
import logs from '../features/logs/reducer';

const reducer = combineReducers({
    app,
    auth,
    devices,
    device,
    logs
});

export const getStore = () => {
    const middleware = (store) => (next) => (action) => {
        return next(action);
    };

    return createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
};