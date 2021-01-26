import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import App from "./App";

const AppContainer = ({ router, store }) => (
    <Router >
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </Router>
);

export default AppContainer;