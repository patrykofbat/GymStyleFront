import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer  from "./rootReducer";
import './index.css';


const loggerMiddleware = createLogger()

const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware ));

const root = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById("root"));
registerServiceWorker();
