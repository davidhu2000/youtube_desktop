import { connect } from 'react-redux';
import { receiveSetting } from 'common/setting/actions';

import Subscriptions from './component';
import { fetchSubscriptionUploads } from './actions';

const mapStateToProps = ({ setting, subscriptions, user }) => ({
  subscriptions,
  loggedIn: Boolean(user),
  channelId: user ? user.channelId : null,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptionUploads: id => dispatch(fetchSubscriptionUploads(id)),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscriptions);
