import React from 'react';
import { connect } from 'react-redux';

import SearchIndex from './search_index';

import { receiveQuery } from '../../actions/query_actions';
import { searchVideos, clearVideos } from '../../actions/youtube_video_actions';

const mapStateToProps = ({ query, searchResult }) => ({
  query,
  searchResult
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query)),
  searchVideos: query => dispatch(searchVideos(query)),
  clearVideos: () => dispatch(clearVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
