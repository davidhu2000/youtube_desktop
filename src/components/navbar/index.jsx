import React            from 'react';
import { connect }      from 'react-redux';
import Navbar           from './navbar';
import { receiveQuery } from '../../actions/query_actions';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
