import { connect } from 'react-redux';
import { receiveSetting } from 'common/setting/actions';
import Playlists from './component';
import {
  fetchChannelPlaylists,
  fetchPlaylistItems } from './actions';

const mapStateToProps = ({ channelDetails, user, setting, playlists }) => ({
  channelDetails,
  loggedIn: Boolean(user),
  user,
  setting,
  playlists
});

const mapDispatchToProps = dispatch => ({
  fetchChannelPlaylists: channelId => dispatch(fetchChannelPlaylists(channelId)),
  fetchPlaylistItems: playlistId => dispatch(fetchPlaylistItems(playlistId)),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlists);
