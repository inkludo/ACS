import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import app from '../app/reducer';
import auth from '../features/Auth/reducer';
import devices from '../features/Devices/reducer';
import device from '../features/DeviceInfo/reducer';



const reducer = combineReducers({
    app,
    auth,
    devices,
    device
});

export const getStore = () => {
    const middleware = (store) => (next) => (action) => {
        return next(action);
    };

    return createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
};