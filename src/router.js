import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from './components/Dashboard';
import WizardPage from './wizards/WizardPage';

export default (
  <Switch>
    <Route component={Login} exact path="/" />
    <Route component={Dashboard} exact path='/Dashboard' />;
    <Route component={WizardPage} exact path='/Wizard' />;
  </Switch>
);
