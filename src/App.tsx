/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./css/loader.css";
import "./css/body.css";

// Layouts
const Layout = lazy(() => import("./layouts/Layout"));

// Pages:
const DocPage = lazy(() => import("./pages/"));
const UtilsX = lazy(() => import("./pages/UtilsX"));

function loadingComponent() {
  return (
    <React.Fragment>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
}

class App extends React.Component<{}, { theme: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: this.getTheme(),
    };
  }

  getTheme() {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme;
    } else {
      localStorage.setItem("theme", "dark");
      return "dark";
    }
  }

  switchTheme = () => {
    this.setState({ theme: this.state.theme === "dark" ? "light" : "dark" });
    localStorage.setItem(
      "theme",
      this.state.theme === "dark" ? "light" : "dark"
    );
  };

  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.theme }}>
        <Router>
          <Suspense fallback={loadingComponent()}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Layout title="Home">
                    <DocPage />
                  </Layout>
                )}
              />
              <Route
                exact
                path="/utilsx"
                render={() => (
                  <Layout title="UtilsX">
                    <UtilsX />
                  </Layout>
                )}
              />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
