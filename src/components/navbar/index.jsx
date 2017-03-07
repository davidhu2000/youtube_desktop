import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { SearchBar } from '../common';

import { receiveQuery } from '../../actions/search_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar receiveQuery={ this.props.receiveQuery }/>
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
)(withRouter(Navbar));
