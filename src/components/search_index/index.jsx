import React from 'react';
import { connect } from 'react-redux';

import SearchIndex from './search_index';

import { receiveQuery } from '../../actions/query_actions';
import { searchVideos } from '../../actions/search_result_actions';

const mapStateToProps = (state, ownProps) => ({
  query: state.query,
  searchResult: state.searchResult
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query)),
  searchVideos: query => dispatch(searchVideos(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
