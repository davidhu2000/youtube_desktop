import React from 'react';
import { withRouter } from 'react-router';

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubscriptions();
  }

  render() {
    return (
      <div className="search-index">
        Subs
      </div>
    )
  }
}

export default withRouter(Subscriptions);
