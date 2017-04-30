import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { receiveSetting } from 'common/setting/actions';

import { fetchTrending } from 'modules/trending/actions';
import { fetchRecommendedVideos } from 'modules/recommended/actions';
import { fetchCategories,
         fetchChannelInfo,
         fetchChannelVideos } from '../actions';

const mapStateToProps = ({ trending, homeChannels, user, recommended, setting }) => ({
  trending,
  homeChannels,
  loggedIn: Boolean(user),
  recommended,
  setting,
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending()),
  fetchChannelInfo: id => dispatch(fetchChannelInfo(id)),
  fetchChannelVideos: id => dispatch(fetchChannelVideos(id)),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchRecommendedVideos: () => dispatch(fetchRecommendedVideos()),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
