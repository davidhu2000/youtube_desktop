import React       from 'react';
import { connect } from 'react-redux';

import SearchIndex from './search_index';

import { receiveQuery } from 'actions/query_actions';
import { receiveSetting } from 'actions/setting_actions';
import {
  searchVideos,
  clearVideos } from 'actions/youtube_video_actions';

const mapStateToProps = ({ query, searchResult, setting }) => ({
  query,
  searchResult,
  setting
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query)),
  searchVideos: (query, nextPageToken, pageNumber) => dispatch(searchVideos(query, nextPageToken, pageNumber)),
  clearVideos: () => dispatch(clearVideos()),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
