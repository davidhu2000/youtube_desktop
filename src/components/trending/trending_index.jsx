import React          from 'react';
import { withRouter } from 'react-router';
import { VideoList }  from '../common';

class TrendingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let ms = 24 * 3600 * 1000;
    if(Date.now() - this.props.date > ms || !this.props.trendingVideos) {
      this.props.fetchTrending();
    }
  }


  render() {
    return (
      <VideoList
        shouldShowVolume={false}
        shouldShowPageNumber={false}
        videos={this.props.trendingVideos} />
    );
  }
}

export default withRouter(TrendingIndex);
