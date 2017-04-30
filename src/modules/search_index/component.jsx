/* global Promise */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { VideoList, Spinner } from 'common/components';
import { propChecker } from 'helpers';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  _fetchResult(query) {
    let dataNeeded = [];

    if(query !== null) {
      dataNeeded.push(this.props.clearVideos());
      dataNeeded.push(this.props.searchVideos(query));
    }

    Promise.all(dataNeeded).then( res => this.props.receiveSetting({ isLoading: false }));
  }

  handleScroll(e) {
    let search = document.getElementById('search-container');
    let main = document.getElementsByClassName('main-content')[0];
    if (window.innerHeight + main.scrollTop > search.clientHeight - 50) {
      this.props.searchVideos(this.props.query, this.props.searchResult.nextPageToken);
    }
  }

  componentDidMount() {
    if(this.props.query !== this.props.searchResult.query) {
      this._fetchResult(this.props.query);
    }
    let main = document.getElementsByClassName('main-content')[0];
    main.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillReceiveProps(newProps) {
    if(this.props.query !== newProps.query) {
      this._fetchResult(newProps.query);
    }
    let main = document.getElementsByClassName('main-content')[0];
    main.removeEventListener('scroll', this.handleScroll);
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
    }
  }
}

SearchIndex.propTypes = {
  receiveQuery: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
  clearVideos: PropTypes.func.isRequired,
  receiveSetting: PropTypes.func.isRequired,
  query: PropTypes.string,
  searchResult: propChecker.searchResult(),
  setting: propChecker.setting({
    windowWidth: PropTypes.number,
    sidebarVisible: PropTypes.bool
  })
};

export default withRouter(SearchIndex);
