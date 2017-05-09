import { connect } from 'react-redux';
import Channel from './component';

import { fetchChannelDetails,
         fetchChannelVideos,
         insertSubscription,
         deleteSubscription } from './actions';
import { fetchSubscriptions } from 'modules/subscriptions/actions';
import { fetchChannelPlaylists } from 'modules/playlists/actions';
import { receiveSetting } from 'common/setting/actions';

const mapStateToProps = ({ channelDetails, user, setting, subscriptions }) => ({
  channelDetails,
  loggedIn: Boolean(user),
  user,
  setting,
  subscriptions
});

const mapDispatchToProps = dispatch => ({
  fetchChannelDetails: id => dispatch(fetchChannelDetails(id)),
  receiveSetting: setting => dispatch(receiveSetting(setting)),
  fetchSubscriptions: channelId => dispatch(fetchSubscriptions(channelId)),
  fetchChannelVideos: id => dispatch(fetchChannelVideos(id)),
  fetchChannelPlaylists: id => dispatch(fetchChannelPlaylists(id)),
  insertSubscription: channelId => dispatch(insertSubscription(channelId)),
  deleteSubscription: subscriptionId => dispatch(deleteSubscription(subscriptionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
