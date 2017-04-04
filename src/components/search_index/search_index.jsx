import React from 'react';
import { withRouter } from 'react-router';
import { VideoList } from '../common';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  _fetchResult(query) {
    if(query !== null) {
      this.props.searchVideos(query);
    }
  }

  componentDidMount() {
    this._fetchResult(this.props.query);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.query !== newProps.query) {
      this._fetchResult(newProps.query);
    }
  }

  render() {
    if(this.props.searchResult.videos) {
      let volume;
      let pageInfo = this.props.searchResult.pageInfo;
      if(pageInfo) {
        volume = pageInfo.totalResults;
      }

      let { pageNumber, nextPageToken, query, videos } = this.props.searchResult;
      let { nextPage, previousPage, searchVideos } = this.props;

      let nextAction;
      let maxPageNumber = Math.max(...Object.keys(videos).map( num => parseInt(num)));

      if(maxPageNumber > pageNumber) {
        nextAction = nextPage;
      } else {
        nextAction = searchVideos;
      }

      return (
        <VideoList
          pageNumber={pageNumber}
          nextPageToken={nextPageToken}
          volume={volume}
          query={query}
          nextAction={nextAction}
          previousPage={previousPage}
          videos={videos[pageNumber]} />
      );
    } else {
      // add spinner
      return <div>Loading</div>
    }

  }
}

export default withRouter(SearchIndex);
