import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { VideoList, Spinner } from '../common';
import { propChecker } from 'helpers';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  _fetchResult(query) {
    if(query !== null) {
      this.props.clearVideos();
      this.props.searchVideos(query);
    }
  }

  componentDidMount() {
    if(this.props.query !== this.props.searchResult.query) {
      this._fetchResult(this.props.query);
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.query !== newProps.query) {
      this._fetchResult(newProps.query);
    }
  }

  render() {
    if(this.props.searchResult.videos) {
      let {
        pageNumber,
        nextPageToken,
        query,
        videos,
        pageInfo } = this.props.searchResult;

      let { nextPage, previousPage, searchVideos, goToPage } = this.props;

      let volume;
      if(pageInfo) {
        volume = pageInfo.totalResults;
      }

      let nextAction;
      let maxPageNumber = Math.max(...Object.keys(videos).map( num => parseInt(num)));

      if(maxPageNumber > pageNumber) {
        nextAction = nextPage;
      } else {
        nextAction = () => searchVideos(query, nextPageToken, pageNumber+1);
      }

      return (
        <div className="main-content">
          
          {/*<VideoList
            pageNumber={pageNumber}
            allPages={Object.keys(videos)}
            volume={volume}
            nextAction={nextAction}
            previousPage={previousPage}
            goToPage={goToPage}
            videos={videos[pageNumber]}
            windowWidth={this.props.setting.windowWidth} />*/}
          <Spinner />
        </div>

      );
    } else {
      // add spinner
      return <div>Loading</div>;
    }
  }
}

SearchIndex.propTypes = {
  receiveQuery: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired, 
  clearVideos: PropTypes.func.isRequired, 
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired, 
  goToPage: PropTypes.func.isRequired, 
  query: PropTypes.string,
  searchResult: propChecker.searchResult()
};

export default withRouter(SearchIndex);
