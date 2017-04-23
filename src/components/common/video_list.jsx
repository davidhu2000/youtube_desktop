import React                from 'react';
import PropTypes            from 'prop-types';
import { formatNumber }     from '../../helpers';
import { VideoListItem }  from '../common';

class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "small": {
        cssPrefix: '',
        maxTitleLength: 34,
        maxDescriptionLength: 40,
        itemWidth: 430
      },
      "medium": {
        cssPrefix: '',
        maxTitleLength: 80,
        maxDescriptionLength: 123,
        itemWidth: 642
      },
      "large": {
        cssPrefix: '',
        maxTitleLength: 150,
        maxDescriptionLength: 180,
        itemWidth: 856
      }
    };

    this.renderPageNumbers = this.renderPageNumbers.bind(this);
    this.addSearchResults = this.addSearchResults.bind(this);
  }

  determineListItemSize() {
    let width = this.props.windowWidth;
    switch (true) {
      case (width < 660 ):
        return 'small';
      case (width >= 600 && width <875):
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
           key={vid.etag}
           vid={vid}
           itemWidth={this.state[size].itemWidth}
           cssPrefix={this.state[size].cssPrefix}
           maxTitleLength={this.state[size].maxTitleLength}
           maxDescriptionLength={this.state[size].maxDescriptionLength} />)
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

  // potentially replace this with infinite scroll?
  renderPageNumbers() {
    let { pageNumber, allPages } = this.props;

    let count = pageNumber - 4;

    if(count < 0 || allPages.length <= 7) {
      count = 0;
    } else if (pageNumber > allPages.length - 4) {
      count = allPages.length - 7;
    }
    return allPages.slice(count, count + 7).map(num => {
      if (num === pageNumber) {
        return (
          <button key={Math.random()} disabled={true}>{num}</button>
        );
      } else {
        return (
          <button
            key={Math.random()}
            onClick={() => this.props.goToPage(parseInt(num))}>{num}</button>
        );
      }
    });
  }

  renderPageNavigtion() {
    if(this.props.shouldShowPageNumber) {
      let { pageNumber, previousPage, nextAction } = this.props;

      return (
        <div className='page-numbers'>
          { pageNumber > 1 ? (
            <button onClick={previousPage}>
              {"« Previous"}
            </button>) : '' }
          { this.renderPageNumbers() }
          <button onClick={nextAction}>
            {"Next »"}
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="search-index">
        <div className="search-index-container">
          {this.addSearchVolume()}
          {this.addSearchResults()}
          {this.renderPageNavigtion()}
        </div>
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