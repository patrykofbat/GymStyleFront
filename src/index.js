import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><App/></Provider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();