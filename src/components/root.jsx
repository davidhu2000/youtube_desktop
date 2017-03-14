import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// main app components
import App from './app';
import SearchIndex from './search_index';

// session components
import Auth from './auth';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <Route path='/search' component={ SearchIndex } />
      </Route>
      
      <Route path='/login-email' component={ Auth } />
      <Route path='/login-password' component={ Auth } />
    </Router>
  </Provider>
);

export default Root;
