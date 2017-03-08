import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import YT_API_KEY from '../../../config/api_key';

import { SearchBar } from '../common';

import { receiveQuery } from '../../actions/query_actions';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  _fetchResult() {
    let query = this.props.query;

    if(query !== null) {
      console.log('not null');
      let base_url = `https://www.googleapis.com/youtube/v3/search`;
      let part ='snippet';
      let type = 'video';

      let full_url = `${base_url}?part=${part}&q=${query}&type=${type}&key=${YT_API_KEY.publicDataKey}`;

      fetch(full_url);
    }

  }

  componentDidMount() {
    this._fetchResult();
  }

  componentWillReceiveProps(newProps) {
    if(this.props.query !== newProps.query) {
      this._fetchResult();
    }
  }

  render() {
    return (
      <div>
        <h1>The Query is {this.props.query}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  query: state.query
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchIndex));
