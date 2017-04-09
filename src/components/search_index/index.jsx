import React       from 'react';
import { connect } from 'react-redux';

import SearchIndex from './search_index';

import { receiveQuery } from '../../actions/query_actions';
import {
  searchVideos,
  clearVideos,
  previousPage,
  nextPage,
  goToPage } from '../../actions/youtube_video_actions';

const mapStateToProps = ({ query, searchResult }) => ({
  query,
  searchResult
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query)),
  searchVideos: (query, nextPageToken, pageNumber) => dispatch(searchVideos(query, nextPageToken, pageNumber)),
  clearVideos: () => dispatch(clearVideos()),
  previousPage: () => dispatch(previousPage()),
  nextPage: () => dispatch(nextPage()),
  goToPage: (pageNumber) => dispatch(goToPage(pageNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
