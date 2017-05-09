import { connect } from 'react-redux';

import { receiveSetting } from 'common/setting/actions';
import { fetchTrending } from 'modules/trending/actions';
import { fetchRecommendedVideos } from 'modules/recommended/actions';
import Home from './component';
import { fetchChannelVideos } from './actions';

const mapStateToProps = ({ trending, homeChannels, user, recommended, setting }) => ({
  trending,
  homeChannels,
  loggedIn: Boolean(user),
  recommended,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending()),
  fetchChannelVideos: id => dispatch(fetchChannelVideos(id)),
  fetchRecommendedVideos: () => dispatch(fetchRecommendedVideos()),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
