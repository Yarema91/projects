import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./store/store";

import 'bootstrap/dist/css/bootstrap.min.css';
// import '~video-react/dist/video-react.css'; // import css



const store = setupStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
