
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Routes from './containers/Routes';

import store from './store/configureStore'

import registerServiceWorker from './registerServiceWorker';

import './index.css'

const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
const history = createHistory({
  basename: publicUrl.pathname
});

render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.querySelector('#root')
);


registerServiceWorker();
