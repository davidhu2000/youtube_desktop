import { connect } from 'react-redux';
import PlayerDetails from './component';

import { videosRate } from 'common/interaction/actions';
import { receiveSetting } from 'common/setting/actions';
import { fetchDetails,
         fetchRelated,
         fetchComments,
         fetchVideoRating,
         switchAutoplay } from './actions';

const mapStateToProps = ({ playerDetails, setting, user }) => ({
  playerDetails,
  setting,
  user,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: videoId => dispatch(fetchComments(videoId)),
  fetchRelated: videoId => dispatch(fetchRelated(videoId)),
  fetchDetails: videoId => dispatch(fetchDetails(videoId)),
  fetchVideoRating: videoId => dispatch(fetchVideoRating(videoId)),
  videosRate: (videoId, rating) => dispatch(videosRate(videoId, rating)),
  receiveSetting: setting => dispatch(receiveSetting(setting)),
  switchAutoplay: status => dispatch(switchAutoplay(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDetails);
