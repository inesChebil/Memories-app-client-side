import React from "react";
import ReactDom from "react-dom";
// provider is going to keep track of that Store, and that allow us to access that store from anywhere inside of the app
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";

import App from "./App";
import "./index.css";
// this is the place where we are going to initialize redux

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
