/* global Promise */
import React from 'react';
import {
  ChannelNavbar,
  ChannelVideos
} from './subcomponents';
import { formatNumber } from 'helpers';
import Playlists from 'modules/playlists';
import { SubscribeButton } from 'common/components';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channelId: this.props.params.channelId,
      currentRoute: "home",
      userId: this.props.user.channelId,
      subscribed: null
    };

    this.clickSubscribe = this.clickSubscribe.bind(this);
    this._getNewChannelInfo = this._getNewChannelInfo.bind(this);
  }

  _getNewChannelInfo(channelId, userId) {
    let dataNeeded = [];
    dataNeeded.push(this.props.fetchChannelDetails(channelId));
    dataNeeded.push(this.props.fetchChannelVideos(channelId));
    dataNeeded.push(this.props.fetchChannelPlaylists(channelId));

    if (this.props.loggedIn) {
      dataNeeded.push(this.isSubscribed());
      if (Object.keys(this.props.subscriptions).length === 0) {
        dataNeeded.push(this.props.fetchSubscriptions(userId));
      }
    }

    Promise.all(dataNeeded); //.then(res => this.props.receiveSetting({ isLoading: false }));
  }

  componentDidMount() {
    this.props.receiveSetting({ isLoading: true });
    this._getNewChannelInfo(this.state.channelId, this.state.userId);
  }

  componentWillReceiveProps(newProps) {
    let channelId = newProps.params.channelId;
    let userId = newProps.user.channelId;
    if (this.state.channelId !== channelId) {
      this.setState({ channelId, userId });
      this._getNewChannelInfo(channelId, userId);
    }
  }

  isSubscribed() {
    let subscribed = Object.keys(this.props.subscriptions);
    let channelId = this.props.params.channelId;

    if (subscribed.includes(channelId)) {
      this.setState({ subscribed: true });
    } else {
      this.setState({ subscribed: false });
    }
  }

  clickSubscribe() {
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
  }

  render() {
    let bannerImg;
    let profileImg;
    let channelName;
    let subscriberNum;
    let videos;

    if (this.props.channelDetails.detail) {
      bannerImg = this.props.channelDetails.detail.brandingSettings.image.bannerImageUrl;
      profileImg = this.props.channelDetails.detail.snippet.thumbnails.default.url;
      channelName = this.props.channelDetails.detail.snippet.title;
      subscriberNum = parseInt(this.props.channelDetails.detail.statistics.subscriberCount);
      videos = this.props.channelDetails.videos;
    }

    if (this.props.setting.isLoading) {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="main-content">
          <div className="channels-container">
            <div className="channel-banner-container">
              <img id="channel-banner"
                src={bannerImg} />
            </div>
            <div className="channel-banner-header">
              <div className="channel-detail-container">
                <div className="channel-detail-left">
                  <div className="channel-profile-container">
                    <img id="channel-profile-img"
                      src={profileImg} />
                  </div>

                  <div className="channel-detail">
                    <p id="channel-name">{channelName}</p>
                    <p id="channel-subscribers">{formatNumber(subscriberNum)} subscribers</p>
                  </div>
                </div>

                <SubscribeButton 
                  clickSubscribe={this.clickSubscribe}
                  subscriberNum={subscriberNum} 
                  isSubscribed={this.state.subscribed}
                />
              </div>
            </div>
            <ChannelNavbar currentRoute={this.state.currentRoute} />

            <ChannelVideos videos={videos} />
            <Playlists channelDetails={this.props.channelDetails} />
          </div>
        </div>
      );
    }
  }
}

export default Channel;
