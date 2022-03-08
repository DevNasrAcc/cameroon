import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CameroonApp from "./app";
import reportWebVitals from "./reportWebVitals";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <CameroonApp />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
