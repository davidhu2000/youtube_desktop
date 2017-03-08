import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { SearchBar } from '../common';

import { receiveQuery } from '../../actions/query_actions';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>The Query is {this.props.query}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  query: state.query
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchIndex));
