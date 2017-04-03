import React from 'react';
import { formatNumber } from '../../helpers';
import { VideoSearchItem, SmlVideoSearchItem } from '../common';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  addSearchResults() {
    if (this.props.videos) {
      let vids = this.props.videos;
      return vids.map(vid => <VideoSearchItem key={vid.etag} vid={vid} />);
    }
  }

  addSmlSearchResults() {
    if (this.props.videos) {
      let vids = this.props.videos;
      return vids.map(vid => <SmlVideoSearchItem key={vid.etag} vid={vid} />);
    }
  }

  addSearchVolume() {
    if (this.props.volume && this.props.shouldShowVolume) {
      return <p>About {formatNumber(this.props.volume)} results</p>;
    }
  }

  renderPageNumbers() {
    if(this.props.shouldShowPageNumber) {
      return (
        <div className='page-numbers'>
          { ['next'].map( num => <div key={num}>{num}</div>) }
        </div>
      );
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
        {this.renderPageNumbers()}
        </div>
      </div>
    );
  }
}

VideoList.defaultProps = {
  shouldShowPageNumber: true,
  shouldShowVolume: true
}

export { VideoList };
