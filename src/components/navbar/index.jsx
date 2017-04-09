import React            from 'react';
import { connect }      from 'react-redux';
import Navbar           from './navbar';
import { receiveQuery } from '../../actions/query_actions';
import { loginUser }    from '../../actions/oauth_actions';

const mapStateToProps = ({ user }) => ({
  user,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query)),
  loginUser: () => dispatch(loginUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
