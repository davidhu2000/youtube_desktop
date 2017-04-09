import React           from 'react';
import { Provider }    from 'react-redux';
import { Router,
         Route,
         IndexRoute,
         hashHistory } from 'react-router';

// main app components
import App            from './app';
import SearchIndex    from './search_index';
import TrendingIndex  from './trending';
import VideoDetail    from './player';
import Home           from './home';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />

        <Route path='/home'           component={ Home }          />
        <Route path='/search'         component={ SearchIndex }   />
        <Route path='/trending'       component={ TrendingIndex } />
        <Route path='/watch/:videoId' component={ VideoDetail }   />
      </Route>
    </Router>
  </Provider>
);

export default Root;
