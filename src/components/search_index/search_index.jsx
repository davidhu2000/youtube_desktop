import React from 'react';
import { withRouter } from 'react-router'; 
import { SearchBar, VideoSearchItem } from '../common';

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

  addSearchResults() {
    if (this.props.searchResult) {
      let vids = this.props.searchResult;
      return vids.map(vid => <VideoSearchItem key={vid.etag} vid={vid} />);
    }
  }

  addSearchVolume() {
      if (this.props.searchResult) {
        let volume = Object.keys(this.props.searchResult).length;
        return <p>About {volume} results</p>;
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
        </div>
      </div>
    );
  }
}

export default withRouter(SearchIndex);
