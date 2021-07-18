import { Switch, Route } from "react-router-dom";
import React from "react";
import AuthGuard from "./components/AuthGuard";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Charts from "./pages/Statistics";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Results from "./pages/Results";
function Routes() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <AuthGuard>
          <MainLayout>
            <Home />
          </MainLayout>
        </AuthGuard>
      </Route>
      <Route path="/profile" exact>
        <AuthGuard>
          <MainLayout>
            <Profile />
          </MainLayout>
        </AuthGuard>
      </Route>
      <Route path="/statistics" exact>
        <AuthGuard>
          <MainLayout>
            <Charts />
          </MainLayout>
        </AuthGuard>
      </Route>
      <Route path="/results" exact>
        <AuthGuard>
          <MainLayout>
            <Results />
          </MainLayout>
        </AuthGuard>
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default Routes;
