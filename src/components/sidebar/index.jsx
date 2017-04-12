import { connect } from 'react-redux';
import Sidebar from './sidebar';

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
