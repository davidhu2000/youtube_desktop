import React       from 'react';
import { connect } from 'react-redux';

import Subscriptions from './subscriptions';

import { receiveQuery } from 'actions/query_actions';
import { fetchSubscriptions, fetchSubscriptionUploads } from 'actions/youtube_video_actions';

const mapStateToProps = ({ setting, subscriptions, user }) => ({
  subscriptions,
  loggedIn: Boolean(user),
  channelId: user ? user.channelId : null,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptions: channelId => dispatch(fetchSubscriptions(channelId)),
  fetchSubscriptionUploads: id => dispatch(fetchSubscriptionUploads(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscriptions);
