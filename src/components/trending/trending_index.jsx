import React from 'react';
import YT_API_KEY from '../../../config/api_key';

import { VideoSearchItem } from '../common';

class TrendingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrending();
  }

  addSearchResults() {
    if (this.props.trendingResults) {
      let vids = this.props.trendingResults;
      return vids.map(vid => <VideoSearchItem key={vid.etag} vid={vid} />);
    }
  }

  addSearchVolume() {
      if (this.props.trendingResults) {
        let volume = Object.keys(this.props.trendingResults).length;
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
        </div>
      </div>
    );
  }
}

export default TrendingIndex;
