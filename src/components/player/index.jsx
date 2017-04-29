import React          from 'react';
import { connect }    from 'react-redux';
import PlayerDetails from './main';

import { fetchComments, fetchVideoRating, fetchRelated, fetchDetails } from 'actions/youtube_video_actions';
import { videosRate } from 'actions/interaction_actions';
import { receiveSetting } from 'actions/setting_actions';

const mapStateToProps = ({ playerDetails, setting }) => ({
  playerDetails,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchComments: videoId => dispatch(fetchComments(videoId)),
  fetchRelated: videoId => dispatch(fetchRelated(videoId)),
  fetchDetails: videoId => dispatch(fetchDetails(videoId)),
  fetchVideoRating: videoId => dispatch(fetchVideoRating(videoId)),
  videosRate: (videoId, rating) => dispatch(videosRate(videoId, rating)),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDetails);
