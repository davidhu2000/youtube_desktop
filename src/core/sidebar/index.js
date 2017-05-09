import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = ({ user, subscriptions, setting }) => ({
  loggedIn: Boolean(user),
  channelId: user ? user.channelId : null,
  subscriptions,
  setting
});

export default connect(
  mapStateToProps,
  null
)(Sidebar);
