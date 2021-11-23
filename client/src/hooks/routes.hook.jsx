import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LogInContainer from '../modules/LogInContainer';
import RegisterContainer from '../modules/RegisterContainer';
import MainLayout from '../components/MainLayout';
import ExternalActions from '../modules/ExternalActions';

export const useRoutes = (isAuthenticated) => {
  if (!isAuthenticated)
    return (
      <Switch>
        <Route exact path="/login">
          <LogInContainer />
        </Route>
        <Route exact path="/register">
          <RegisterContainer />
        </Route>
        <Route path="/actions/:id">
          <ExternalActions />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );

  return (
    <>
      <Switch>
        <Route path="/actions/:id">
          <ExternalActions />
        </Route>
        <Route path="/layout">
          <MainLayout />
        </Route>
        <Redirect to="/layout" />
      </Switch>
    </>
  );
};
