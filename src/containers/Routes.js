import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './App';

import Layout from './Layout/Layout';

import Dashboard from '../pages/Dashboard/Dashboard';

export default () => (
  <div>
    <App />
    <Layout
      renderRoutes={() => (
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard"/>} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      )}
    />
  </div>
);
