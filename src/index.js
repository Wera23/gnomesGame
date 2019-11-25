import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./scss/style.scss";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { store, theme } from "./_helpers";
import Routes from "../src/components/Router/Routes";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
      <Router history={history}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
