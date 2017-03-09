import React from 'react';
import { withRouter } from 'react-router';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
  const { kind } = this.props.vid;

  return (
    <div className="index_item">
      <h1>test</h1>
    </div>
  );

  }
}

export default withRouter(SearchIndexItem);
