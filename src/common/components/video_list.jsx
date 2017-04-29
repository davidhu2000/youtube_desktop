import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from 'helpers';
import { VideoListItem, Spinner }  from '../components';

class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "small": {
        maxTitleLength: 34,
        maxDescriptionLength: 40,
        maxChannelTitleLength: 15,
        itemWidth: 430
      },
      "medium": {
        maxTitleLength: 80,
        maxDescriptionLength: 123,
        maxChannelTitleLength: 200,
        itemWidth: 642
      },
      "large": {
        maxTitleLength: 150,
        maxDescriptionLength: 180,
        maxChannelTitleLength: 200,
        itemWidth: 856
      },
      loading: true
    };

    this.addSearchResults = this.addSearchResults.bind(this);
  }

  determineListItemSize() {
    let width = window.innerWidth;
    switch (true) {
      case (width < 660 ):
        return 'small';
      case (width >= 660 && width <875):
        return 'medium';
      case (width >= 865):
        return 'large';
    }
  }

  addSearchResults() {
     if (this.props.videos) {
       let size = this.determineListItemSize();
       let vids = this.props.videos;

       return vids.map(vid => (
         <VideoListItem
           key={Math.random()}
           vid={vid}
           itemWidth={this.state[size].itemWidth}
           maxTitleLength={this.state[size].maxTitleLength}
           maxDescriptionLength={this.state[size].maxDescriptionLength}
           maxChannelTitleLength={this.state[size].maxChannelTitleLength} />)
       );
    }
  }

  addSearchVolume() {
    if (this.props.volume && this.props.shouldShowVolume) {
      return (
        <div className="search-index-container-top">
          <p>About {formatNumber(this.props.volume)} results</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="search-index-container" id='search-container'>
        {this.addSearchVolume()}
        {this.addSearchResults()}
        { this.state.loading ? <Spinner /> : null }
      </div>
    );
  }
}

VideoList.propTypes = {
  showShowPageNumber: PropTypes.bool,
  showShowVolume: PropTypes.bool,
  videos: PropTypes.arrayOf(PropTypes.object),
  windowWidth: PropTypes.number
};

VideoList.defaultProps = {
  shouldShowPageNumber: true,
  shouldShowVolume: true
};

export { VideoList };
