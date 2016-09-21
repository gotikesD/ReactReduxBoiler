'use strict';
import React from 'react';
import 'babel-polyfill';
import {browserHistory, Router} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import routes from './routes';
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,
    document.getElementById(`root`)
);
