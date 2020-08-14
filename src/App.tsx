/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import "./css/loader.css";
import "./css/body.css"

// Layouts
const Layout = lazy(() => import("./layouts/Layout"));

// Pages:
const HomePage = lazy(() => import("./pages/"));

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

class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={loadingComponent()}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Layout title="Home">
                  <HomePage />
                </Layout>
              )}
            />
            <Redirect to="/404" />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
