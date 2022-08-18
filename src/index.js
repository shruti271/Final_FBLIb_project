import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider, createTheme } from '@mui/material/styles'
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: {
    fontFamily: [
      'Neue Haas Grotesk Display Pro', 'sans-serif'
    ].join(',')
}});
root.render(
  <Router>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </Provider>
  </Router>
);
