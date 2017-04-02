import React from 'react';
import { connect } from 'react-redux';
import Home from './home.jsx';

import { fetchTrending } from '../../actions/youtube_video_actions';

const mapStateToProps = (state, ownProps) => ({
  trendingVideos: state.trending.videos,
  trendingDate: state.trending.date
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
