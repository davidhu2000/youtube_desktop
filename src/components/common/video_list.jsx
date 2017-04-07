import React                from 'react';
import { formatNumber }     from '../../helpers';
import { VideoSearchItem }  from '../common';

class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.renderPageNumbers = this.renderPageNumbers.bind(this);
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
      return vids.map(vid => (
        <VideoSearchItem
          key={vid.etag}
          vid={vid}
          cssPrefix='sml-'
          maxTitleLength={33}
          maxDescriptionLength={40} />)
      );
    }
  }

  addSearchVolume() {
    if (this.props.volume && this.props.shouldShowVolume) {
      return <p>About {formatNumber(this.props.volume)} results</p>;
    }
  }

  renderPageNumbers() {
    let { pageNumber, allPages } = this.props;

    let count = pageNumber - 4;

    if(count < 0 || allPages.length <= 7) {
      count = 0;
    } else if (pageNumber > allPages.length - 4) {
      count = allPages.length - 7;
    }
    console.log(count);
    return allPages.slice(count, count + 7).map(num => {
      if (num == pageNumber) {
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
          <div className="search-index-container-top">
            {this.addSearchVolume()}
          </div>
          {this.addSearchResults()}
          {this.addSmlSearchResults()}
          {this.renderPageNavigtion()}
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
