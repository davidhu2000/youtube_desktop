import { connect } from 'react-redux';
import { receiveQuery } from 'common/query/actions';
import { loginUser, receiveUser } from 'modules/user/actions';
import Navbar from './navbar';

const mapStateToProps = ({ user }) => ({
  user,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query)),
  loginUser: () => dispatch(loginUser()),
  logout: () => dispatch(receiveUser(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
