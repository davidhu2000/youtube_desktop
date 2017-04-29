import { connect } from 'react-redux';
import Subscriptions from './subscriptions';

import { receiveQuery } from 'common/query/actions';
import { receiveSetting } from 'common/setting/actions';
import { fetchSubscriptions, fetchSubscriptionUploads } from '../actions';

const mapStateToProps = ({ setting, subscriptions, user }) => ({
  subscriptions,
  loggedIn: Boolean(user),
  channelId: user ? user.channelId : null,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptions: channelId => dispatch(fetchSubscriptions(channelId)),
  fetchSubscriptionUploads: id => dispatch(fetchSubscriptionUploads(id)),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscriptions);
