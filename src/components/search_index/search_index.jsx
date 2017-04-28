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
        nextPageToken,
        query,
        videos,
        pageInfo } = this.props.searchResult;

      let { searchVideos } = this.props;

      let volume;
      if(pageInfo) {
        volume = pageInfo.totalResults;
      }
      let nextAction = () => searchVideos(query, nextPageToken);

      return (
        <div className="main-content">
          
          <VideoList
            volume={volume}
            nextAction={nextAction}
            videos={videos}
            windowWidth={this.props.setting.windowWidth} />
          
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
  query: PropTypes.string,
  searchResult: propChecker.searchResult()
};

export default withRouter(SearchIndex);
