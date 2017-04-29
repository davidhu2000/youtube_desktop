import { connect } from 'react-redux';
import Channel from './channels.jsx';

import { fetchChannelDetails } from '../../actions/youtube_video_actions';

const mapStateToProps = ({ trending, channels, channelDetails, user, recommended, setting }) => ({
  trending,
  channels,
  channelDetails,
  loggedIn: Boolean(user),
  recommended,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchChannelDetails: id => dispatch(fetchChannelDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
