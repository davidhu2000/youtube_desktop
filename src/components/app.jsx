import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

import Navbar from './navbar';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return(
        <div>
          <Navbar />
          Test App
          <br/>
          <Link to="/player">Player</Link>
        </div>
      );
  }

}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
