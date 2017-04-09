import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// main app components
import App            from './app';
import SearchIndex    from './search_index';
import Trending       from './trending';
import VideoDetail    from './player';
import Home           from './home';
import Subscriptions  from './subscriptions';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />

        <Route path='/home'           component={ Home }          />
        <Route path='/search'         component={ SearchIndex }   />
        <Route path='/trending'       component={ Trending }      />
        <Route path='/subscriptions'  component={ Subscriptions } />
        <Route path='/watch/:videoId' component={ VideoDetail }   />
      </Route>
    </Router>
  </Provider>
);

export default Root;
