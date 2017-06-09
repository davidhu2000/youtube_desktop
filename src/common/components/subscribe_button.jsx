import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { formatNumber } from 'helpers';

class SubscribeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribed: false
    };

    autoBind(this);
  }

  componentDidMount() {
    this.isSubscribed();
  }

  isSubscribed() {
    let subscribed = Object.keys(this.props.subscriptions);
    let channelId = this.props.channelId;

    if (subscribed.includes(channelId)) {
      this.setState({ subscribed: true });
    } else {
      this.setState({ subscribed: false });
    }
  }

  clickSubscribe() {
    let channelId = this.props.channelId;
    let subscriptions = Object.keys(this.props.subscriptions);
    let subscriptionId;

    for (let i = 0; i < subscriptions.length; i++) {
      let subscription = this.props.subscriptions[subscriptions[i]];
      if (subscription.resourceId.channelId === channelId) {
        subscriptionId = subscription.subscriptionId;
        break;
      }
    }

    if (this.state.subscribed) {
      this.props.deleteSubscription(subscriptionId);
      this.setState({ subscribed: false });
    } else {
      this.props.insertSubscription(channelId);
      this.setState({ subscribed: true });
    }
  }

  render() {
    let cssClass = '';
    let text = 'Subscribe';
    let { subscriberNum } = this.props;

    if (this.state.subscribed) {
      cssClass = '-sub';
      text = 'Subscribed';
      subscriberNum++;
    }

    return (
      <div className="subscriber-button">
        <button
          id={`channel-subscribers-button${cssClass}`}
          onClick={this.clickSubscribe}
          className="sub-button"
        >
          {text} {formatNumber(subscriberNum, true)}
        </button>
      </div>
    );
  }
}

SubscribeButton.propTypes = {
  subscriberNum: PropTypes.number.isRequired,
  channelId: PropTypes.string.isRequired,
  subscriptions: PropTypes.shape().isRequired,
  insertSubscription: PropTypes.func.isRequired,
  deleteSubscription: PropTypes.func.isRequired
};

export { SubscribeButton };
