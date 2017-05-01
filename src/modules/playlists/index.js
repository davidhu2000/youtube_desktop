import { connect } from 'react-redux';
import Playlists from './component';

import { fetchChannelPlaylists } from './actions';
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
  fetchChannelPlaylists: channelId => dispatch(fetchChannelPlaylists(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlists);
