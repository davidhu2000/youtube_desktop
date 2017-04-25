import React             from 'react';
import { connect }       from 'react-redux';
import { withRouter }    from 'react-router';

import trendingIndex     from './trending_index';
import { fetchTrending } from 'actions/youtube_video_actions';

const mapStateToProps = ({ trending, setting }) => ({
  trending,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(trendingIndex));
