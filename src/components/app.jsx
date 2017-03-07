import React from 'react';
import { withRouter, Link } from 'react-router'

class App extends React.Component {

  render() {
      return(
        <div>
          Test App
          <br/>
          <Link to="/player">Player</Link>
        </div>
      );
  }

}

export default withRouter(App);
