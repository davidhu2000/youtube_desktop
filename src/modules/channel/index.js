import { connect } from 'react-redux';
import Channel from './component';

import { fetchChannelDetails } from './actions';
import { fetchSubscriptions } from 'modules/subscriptions/actions';
import { receiveSetting } from 'common/setting/actions';

const mapStateToProps = ({ homeChannels, channelDetails, user, setting, subscriptions }) => ({
  homeChannels,
  channelDetails,
  user,
  loggedIn: Boolean(user),
  setting,
  subscriptions
});

const mapDispatchToProps = dispatch => ({
  fetchChannelDetails: id => dispatch(fetchChannelDetails(id)),
  receiveSetting: setting => dispatch(receiveSetting(setting)),
  fetchSubscriptions: channelId => dispatch(fetchSubscriptions(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
