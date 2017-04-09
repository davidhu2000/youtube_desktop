import React       from 'react';
import { connect } from 'react-redux';

import Subscriptions from './subscriptions';

import { receiveQuery } from '../../actions/query_actions';
import { fetchSubscriptions } from '../../actions/youtube_video_actions';

const mapStateToProps = ({ subscriptions }) => ({
  subscriptions
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptions: () => dispatch(fetchSubscriptions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscriptions);
