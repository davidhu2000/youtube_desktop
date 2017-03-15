import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SearchIndex from './search_index';
import TrendingIndexContainer from './trending/trending_index_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <Route path='/search' component={ SearchIndex } />
        <Route path='/trending' component={ TrendingIndexContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
