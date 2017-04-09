import React from 'react';
import { withRouter } from 'react-router';

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubscriptions().then(
      () => {
        Object.keys(this.props.subscriptions).forEach( id => {
          console.log(id);
          this.props.fetchSubscriptionUploads(id)
        });
      }
    );
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
