import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

import Navbar from './navbar';
import Sidebar from './sidebar';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return(
        <div>
          <Navbar />
          <Sidebar />
          { this.props.children }
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
