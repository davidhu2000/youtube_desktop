import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { SearchBar } from '../common';

import { receiveQuery } from '../../actions/search_actions';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>The Search is {this.props.search}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: search => dispatch(receiveQuery(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchIndex));
