import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import routes from './routes';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory } routes={routes} />
  </Provider>
);

export default Root;
