import React          from 'react';
import { withRouter } from 'react-router';
import { connect }    from 'react-redux';
import PlayerDetails from './main';

import { fetchComments, fetchVideoRating, fetchRelated, fetchDetails } from 'actions/youtube_video_actions';

const mapStateToProps = ({ playerDetails, setting }) => ({
  playerDetails,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments()),
  fetchRelated: () => dispatch(fetchRelated()),
  fetchDetails: () => dispatch(fetchDetails()),
  fetchVideoRating: () => dispatch(fetchVideoRating())
});

export default withRouter(PlayerDetails);
