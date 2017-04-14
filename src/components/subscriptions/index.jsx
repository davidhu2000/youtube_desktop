import React       from 'react';
import { connect } from 'react-redux';

import Subscriptions from './subscriptions';

import { receiveQuery } from '../../actions/query_actions';
import { fetchSubscriptions, fetchSubscriptionUploads } from '../../actions/youtube_video_actions';

const mapStateToProps = ({ subscriptions, user }) => ({
  subscriptions,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptions: () => dispatch(fetchSubscriptions()),
  fetchSubscriptionUploads: id => dispatch(fetchSubscriptionUploads(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscriptions);
