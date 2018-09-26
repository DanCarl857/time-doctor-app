import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';

// Configure Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

// Access Electron modules
const electron = window.require('electron');
const ipc = electron.ipcRenderer;

// Create Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// This is so that we can be able to access the timer from the widget
store.subscribe(() => {
    ipc.send("timer", store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App ipc={ipc} />
    </Provider>, 
    document.getElementById('root'));
