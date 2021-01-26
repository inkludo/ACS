import React from 'react';
import ReactDOM from 'react-dom';
import { getStore } from "./app/store";
import App from './app/components/App/AppContainer';

//change router
const store = getStore();
ReactDOM.render(<App store={store} />, document.getElementById('root'));