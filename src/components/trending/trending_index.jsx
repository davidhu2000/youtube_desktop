import React          from 'react';
import PropTypes      from 'prop-types';
import { withRouter } from 'react-router';
import { VideoList }  from '../common';

class TrendingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { trending } = this.props;
    let ms = 24 * 3600 * 1000;
    if(Date.now() - trending.date > ms || !trending.videos) {
      this.props.fetchTrending();
    }
  }

  render() {
    return (
      <VideoList
        shouldShowVolume={false}
        shouldShowPageNumber={false}
        videos={this.props.trending.videos} 
        windowWidth={this.props.setting.windowWidth} />
    );
  }
}

TrendingIndex.propTypes = {
  fetchTrending: PropTypes.func.isRequired,
  trending: PropTypes.shape({
    date: PropTypes.number,
    videos: PropTypes.arrayOf(PropTypes.object)
  })
};

export default withRouter(TrendingIndex);
