// import React       from 'react';
// import { connect } from 'react-redux';
// import Home        from './home.jsx';
//
// import { receiveSetting } from 'actions/setting_actions';
//
// import {
//   fetchTrending,
//   fetchCategories,
//   fetchChannelInfo,
//   fetchChannelVideos,
//   fetchRecommendedVideos } from '../../actions/youtube_video_actions';
//
// const mapStateToProps = ({ trending, channels, user, recommended, setting }) => ({
//   trending,
//   channels,
//   loggedIn: Boolean(user),
//   recommended,
//   setting,
// });
//
// const mapDispatchToProps = dispatch => ({
//   fetchTrending: () => dispatch(fetchTrending()),
//   fetchChannelInfo: id => dispatch(fetchChannelInfo(id)),
//   fetchChannelVideos: id => dispatch(fetchChannelVideos(id)),
//   fetchCategories: () => dispatch(fetchCategories()),
//   fetchRecommendedVideos: () => dispatch(fetchRecommendedVideos()),
//   receiveSetting: setting => dispatch(receiveSetting(setting))
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);
