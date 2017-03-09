import React from 'react';
import { withRouter } from 'react-router';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
  const { description, title } = this.props.vid.snippet;
  const { url } = this.props.vid.snippet.thumbnails.high;

  return (
    <div className="index_item">
      <img className="index_item_thumb" src={url} />
      <h1>{title}</h1>
    </div>
  );

  }
}

export default withRouter(SearchIndexItem);
