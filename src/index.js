
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Routes from './containers/Routes';

import store from './store/configureStore'

import registerServiceWorker from './registerServiceWorker';

import './index.css'


const target = document.querySelector('#root')
const history = createHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  target
);


registerServiceWorker();
