import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/store";
// import '../node_modules/react-vis/dist/style.css';
// import FusionCharts from "fusioncharts";
// import Charts from "fusioncharts/fusioncharts.charts";
// // Include the chart type
// // import Column2D from 'fusioncharts/fusioncharts.charts';
// import ReactFC from "react-fusioncharts";
// // Include the core fusioncharts file from core
// import FusionCharts from 'fusioncharts/core';
// // Include the chart from viz folder
// import Column2D from 'fusioncharts/viz/column2d';
// // Include the fusion theme
// import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.umber';
import 'react-vis/dist/style.css'
import 'react-vis/dist/styles/legends.scss'

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/global-styles/global.css";
import "./assets/global-styles/animate.css";
// antd css
import "antd/dist/antd.css";
// react loader spinner css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const ApplicationWithPlugins = () => {
//   // Add the chart and theme as dependency
//   // E.g. FusionCharts.addDep(ChartType)
//   FusionCharts.addDep(Column2D);
//   FusionCharts.addDep(FusionTheme);
//   ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
//   return <App />;
// };

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
