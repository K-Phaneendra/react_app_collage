import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/store";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/global-styles/global.css";
import "./assets/global-styles/animate.css";
// antd css
import "antd/dist/antd.css";
// react loader spinner css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import App from "./App";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
