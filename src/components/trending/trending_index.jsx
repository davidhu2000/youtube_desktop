import React          from 'react';
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
        videos={this.props.trending.videos} />
    );
  }
}

export default withRouter(TrendingIndex);
