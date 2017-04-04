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

      return (
        <VideoList
          pageNumber={this.props.searchResult.pageNumber}
          nextPageToken={this.props.searchResult.nextPageToken}
          volume={volume}
          query={this.props.searchResult.query}
          next={this.props.searchVideos}
          videos={this.props.searchResult.videos[this.props.searchResult.pageNumber]} />
      );
    } else {
      // add spinner
      return <div>Loading</div>
    }

  }
}

export default withRouter(SearchIndex);
