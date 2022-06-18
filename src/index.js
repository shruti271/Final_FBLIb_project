import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dummy from "./pages/dummypicker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Dummy/> */}
      </Provider>
    </React.StrictMode>
  </Router>
);
