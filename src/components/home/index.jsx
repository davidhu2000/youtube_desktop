import React from 'react';
import { connect } from 'react-redux';
import Home from './home.jsx';

import { fetchTrending } from '../../actions/youtube_video_actions';

const mapStateToProps = (state, ownProps) => ({
  searchResult: state.searchResult
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
