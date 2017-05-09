import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired
};

export default Root;
