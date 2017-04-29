import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { receiveQuery } from 'actions/query_actions'; // TODO: Update!
import { loginUser, receiveUser } from 'common/modules/user/actions';

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
