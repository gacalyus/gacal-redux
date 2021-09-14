import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./reduxx/reducers/configureStore";
import "alertifyjs/build/css/alertify.min.css";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
