/* global Promise, document, window */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { VideoList } from 'common/components';
import { propChecker } from 'helpers';

class SearchIndex extends React.Component {

  componentDidMount() {
    if (this.props.query !== this.props.searchResult.query) {
      this.props.receiveSetting({ isLoading: true });
      this._fetchResult(this.props.query);
    }
    let main = document.getElementsByClassName('main-content')[0];
    main.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.query !== newProps.query) {
      this.props.receiveSetting({ isLoading: true });
      this._fetchResult(newProps.query);
    }
  }

  componentWillUnmount() {
    let main = document.getElementsByClassName('main-content')[0];
    main.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let search = document.getElementById('search-container');
    let main = document.getElementsByClassName('main-content')[0];
    let inRange = window.innerHeight + main.scrollTop > search.clientHeight - 50;
    if (inRange && !this.props.setting.isLoading) {
      this.props.receiveSetting({ isLoading: true });
      this.props.searchVideos(this.props.query, this.props.searchResult.nextPageToken).then(
        () => this.props.receiveSetting({ isLoading: false })
      );
    }
  }

  _fetchResult(query) {
    let dataNeeded = [];

    if (query !== null) {
      dataNeeded.push(this.props.clearVideos());
      dataNeeded.push(this.props.searchVideos(query));
    }

    Promise.all(dataNeeded).then(() => this.props.receiveSetting({ isLoading: false }));
  }

  render() {
    if (this.props.searchResult.videos) {
      let {
        nextPageToken,
        query,
        videos,
        pageInfo } = this.props.searchResult;

      let { searchVideos } = this.props;

      let volume;
      if (pageInfo) {
        volume = pageInfo.totalResults;
      }
      let nextAction = () => searchVideos(query, nextPageToken);

      return (
        <div className="main-content">
          <VideoList
            volume={volume}
            nextAction={nextAction}
            videos={videos}
            windowWidth={this.props.setting.windowWidth}
          />
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

SearchIndex.propTypes = {
  searchVideos: PropTypes.func.isRequired,
  clearVideos: PropTypes.func.isRequired,
  receiveSetting: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  searchResult: propChecker.searchResult().isRequired,
  setting: propChecker.setting().isRequired
};

export default withRouter(SearchIndex);
