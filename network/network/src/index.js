import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/reduxStore";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
