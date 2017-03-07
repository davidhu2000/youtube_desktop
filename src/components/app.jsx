import React from 'react';
import { withRouter, Link } from 'react-router';

import SearchIndex from './search_index/search_index';

class App extends React.Component {

  render() {
      return(
        <div>
          <SearchIndex />
          Test App
          <br/>
          <Link to="/player">Player</Link>
        </div>
      );
  }

}

export default withRouter(App);
