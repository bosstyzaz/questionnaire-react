import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import CreateFormPage from "./pages/CreateForm";
import FormDetailPage from "./pages/FormDetail";
import AnswerPage from "./pages/Answer";
import ResponsePage from "./pages/Response";
import ResponseDetailPage from "./pages/ResponseDetail";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/create">
          <CreateFormPage />
        </Route>
        <Route path="/form/:id">
          <FormDetailPage />
        </Route>
        <Route path="/answer/:id">
          <AnswerPage />
        </Route>
        <Route path="/response/:id">
          <ResponsePage />
        </Route>
        <Route path="/result/:id">
          <ResponseDetailPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
