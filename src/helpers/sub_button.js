export const isSubscribed = () => {
  let subscribed = Object.keys(this.props.subscriptions);
  let channelId = this.props.params.channelId;

  if (subscribed.includes(channelId)) {
    this.setState({ subscribed: true });
  } else {
    this.setState({ subscribed: false });
  }
};

export const clickSubscribe = () => {
  let channelId = this.state.channelId;
  let subscriptions = Object.keys(this.props.subscriptions);
  let subscriptionId;

  for (let i = 0; i < subscriptions.length; i++) {
    if (this.props.subscriptions[subscriptions[i]].resourceId.channelId === channelId) {
      subscriptionId = this.props.subscriptions[subscriptions[i]].subscriptionId;
    }
  }

  if (this.state.subscribed) {
    this.props.deleteSubscription(subscriptionId);
    this.setState({ subscribed: false });
  } else {
    this.props.insertSubscription(channelId);
    this.setState({ subscribed: true });
  }
};
