import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

import { SearchBar } from './common';

import { receiveQuery } from '../actions/search_actions';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return(
        <div>
          <SearchBar receiveQuery={this.props.receiveQuery}/>
          Test App
          <br/>
          <Link to="/player">Player</Link>
        </div>
      );
  }

}

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
