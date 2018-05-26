import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';

import Layout from './Layout/Layout';

import Dashboard from '../pages/Dashboard/Dashboard';

export default () => (
  <div>
    <App />
    <Layout
      renderRoutes={() => (
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      )}
    />
  </div>
);
