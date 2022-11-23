import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider } from 'react-redux';
import {store} from './redux/store'
import rootReducer from "./redux/reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store =configureStore({reducer: rootReducer})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
    <App />
        </Provider>
</BrowserRouter>
);
