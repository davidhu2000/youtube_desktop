import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={ store }>
    <h1>React is working</h1>
  </Provider>
);

export default Root;
