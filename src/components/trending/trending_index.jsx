import React from 'react';
import { withRouter } from 'react-router';
import { VideoSearchItem, SmlVideoSearchItem } from '../common';

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

  addSearchResults() {
    if (this.props.trendingVideos) {
      let vids = this.props.trendingVideos;
      return vids.map(vid => <VideoSearchItem key={vid.etag} vid={vid} />);
    }
  }

  addSmlSearchResults() {
    if (this.props.trendingVideos) {
      let vids = this.props.trendingVideos;
      return vids.map(vid => <SmlVideoSearchItem key={vid.etag} vid={vid} />);
    }
  }

  addSearchVolume() {
    if (this.props.trendingVideos) {
      let volume = Object.keys(this.props.trendingVideos).length;
      return <p>About {volume} results</p>;
    }
  }

  render() {
    return (
      <div className="search-index">
        <div className="search-index-container">
          <div className="search-index-container-top">
            {this.addSearchVolume()}
          </div>
        {this.addSearchResults()}
        {this.addSmlSearchResults()}
        </div>
      </div>
    );
  }
}

export default withRouter(TrendingIndex);
