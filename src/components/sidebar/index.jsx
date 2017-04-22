import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchChannelId }   from '../../actions/youtube_video_actions';

const mapStateToProps = ({ user, subscriptions, setting }) => ({
  loggedIn: Boolean(user),
  subscriptions,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchChannelId: () => dispatch(fetchChannelId())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
