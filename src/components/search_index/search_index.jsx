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
    let volume;
    let pageInfo = this.props.searchResult.pageInfo;
    if(pageInfo) {
      volume = pageInfo.totalResults;
    }

    return (
      <VideoList
        volume={volume}
        videos={this.props.searchResult.videos} />
    );
  }
}

export default withRouter(SearchIndex);
