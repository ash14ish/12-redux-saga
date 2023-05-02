import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import "bootstrap/dist/css/bootstrap.min.css";

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";

const sagaMiddleWare = createSagaMiddleware();

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
