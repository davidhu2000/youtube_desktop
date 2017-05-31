import { connect } from 'react-redux';
import { videosRate } from 'common/interaction/actions';
import { receiveSetting } from 'common/setting/actions';
import { insertSubscription,
        deleteSubscription } from 'modules/channel/actions';
import PlayerDetails from './component';
import { fetchDetails,
         fetchRelated,
         fetchComments,
         fetchVideoRating,
         switchAutoplay } from './actions';

const mapStateToProps = ({ playerDetails, setting, user, subscriptions }) => ({
  playerDetails,
  setting,
  user,
  subscriptions,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: videoId => dispatch(fetchComments(videoId)),
  fetchRelated: videoId => dispatch(fetchRelated(videoId)),
  fetchDetails: videoId => dispatch(fetchDetails(videoId)),
  fetchVideoRating: videoId => dispatch(fetchVideoRating(videoId)),
  videosRate: (videoId, rating) => dispatch(videosRate(videoId, rating)),
  receiveSetting: setting => dispatch(receiveSetting(setting)),
  switchAutoplay: status => dispatch(switchAutoplay(status)),
  insertSubscription: channelId => dispatch(insertSubscription(channelId)),
  deleteSubscription: subscriptionId => dispatch(deleteSubscription(subscriptionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDetails);
