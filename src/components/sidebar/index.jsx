import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = ({ user, subscriptions }) => ({
  loggedIn: Boolean(user),
  subscriptions
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
