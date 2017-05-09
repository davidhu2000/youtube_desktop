import { connect } from 'react-redux';
import Channel from './component';

import { fetchChannelDetails,
         fetchChannelVideos,
         insertSubscription,
         deleteSubscription } from './actions';
import { fetchSubscriptions } from 'modules/subscriptions/actions';
import { fetchChannelPlaylists, fetchPlaylistItems } from 'modules/playlists/actions';
import { receiveSetting } from 'common/setting/actions';

const mapStateToProps = ({ channelDetails, user, setting, subscriptions, playlists }) => ({
  channelDetails,
  loggedIn: Boolean(user),
  user,
  setting,
  subscriptions,
  playlists
});

const mapDispatchToProps = dispatch => ({
  fetchChannelDetails: id => dispatch(fetchChannelDetails(id)),
  receiveSetting: setting => dispatch(receiveSetting(setting)),
  fetchSubscriptions: channelId => dispatch(fetchSubscriptions(channelId)),
  fetchChannelVideos: id => dispatch(fetchChannelVideos(id)),
  fetchChannelPlaylists: id => dispatch(fetchChannelPlaylists(id)),
  fetchPlaylistItems: playlistId => dispatch(fetchPlaylistItems(playlistId)),
  insertSubscription: channelId => dispatch(insertSubscription(channelId)),
  deleteSubscription: subscriptionId => dispatch(deleteSubscription(subscriptionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
