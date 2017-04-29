import { connect } from 'react-redux';
import Channel from './channels.jsx';

import { fetchChannelDetails } from 'actions/youtube_video_actions';
import { receiveSetting } from 'actions/setting_actions';

const mapStateToProps = ({ channels, channelDetails, user, setting }) => ({
  channels,
  channelDetails,
  user,
  loggedIn: Boolean(user),
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchChannelDetails: id => dispatch(fetchChannelDetails(id)),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
