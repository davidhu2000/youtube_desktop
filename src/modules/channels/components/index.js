import { connect } from 'react-redux';
import Channel from './channel.jsx';

import { fetchChannelDetails } from '../actions.js';
import { receiveSetting } from 'common/setting_actions.js';

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
