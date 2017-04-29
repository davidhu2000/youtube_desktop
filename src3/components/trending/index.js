import React             from 'react';
import { connect }       from 'react-redux';
import { withRouter }    from 'react-router';

import trendingIndex     from './trending_index';
import { fetchTrending } from 'actions/youtube_video_actions';
import { receiveSetting } from 'actions/setting_actions';

const mapStateToProps = ({ trending, setting }) => ({
  trending,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending()),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(trendingIndex));
