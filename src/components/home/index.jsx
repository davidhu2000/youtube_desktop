import React       from 'react';
import { connect } from 'react-redux';
import Home        from './home.jsx';

import {
  fetchTrending,
  fetchCategories,
  fetchChannelInfo,
  fetchChannelVideos } from '../../actions/youtube_video_actions';

const mapStateToProps = ({ trending, channels, user }) => ({
  trending,
  channels,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending()),
  fetchChannelInfo: id => dispatch(fetchChannelInfo(id)),
  fetchChannelVideos: id => dispatch(fetchChannelVideos(id)),
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
