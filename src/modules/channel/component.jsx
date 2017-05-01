import React from 'react';
import { ChannelNavbar } from './subcomponents';
import { formatNumber } from 'helpers';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channelId: this.props.params.channelId,
      currentRoute: "home"
    };
  }

  _getNewChannelInfo(channelId) {
    let dataNeeded = [];
    dataNeeded.push(this.props.fetchChannelDetails(channelId));
    Promise.all(dataNeeded).then( res => this.props.receiveSetting({ isLoading: false }));
  }

  componentDidMount() {
    this.props.receiveSetting({ isLoading: true });
    this._getNewChannelInfo(this.state.channelId);

    let sidebar = document.getElementById('sidebar');
    sidebar.classList.add('hidden-channel');
  }

  componentWillUnmount() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('hidden-channel');
  }

  componentWillReceiveProps(newProps) {
    let channelId = newProps.params.channelId;
    if (this.state.channelId !== channelId) {
      this.setState({ channelId });
      this._getNewChannelInfo(channelId);
    }
  }

  renderSubscription() {
    let subscribed = Object.keys(this.props.subscriptions);
    let channelId = this.props.params.channelId;
    let subscriberNum;

    if (this.props.channelDetails.detail) {
      subscriberNum = this.props.channelDetails.detail.statistics.subscriberCount;
    }

    if (subscribed.includes(channelId)) {
      return (
        <button id="channel-subscribers-button-sub">
          Subscribed {formatNumber(subscriberNum, true)}
        </button>
      )
    } else {
      return (
        <button id="channel-subscribers-button">
          Subscribe {formatNumber(subscriberNum, true)}
        </button>
      )
    }
  }

  render() {
    let bannerImg;
    let profileImg;
    let channelName;
    let subscriberNum;

    if (this.props.channelDetails.detail) {
      bannerImg = this.props.channelDetails.detail.brandingSettings.image.bannerImageUrl;
      profileImg = this.props.channelDetails.detail.snippet.thumbnails.default.url;
      channelName = this.props.channelDetails.detail.snippet.title;
      subscriberNum = this.props.channelDetails.detail.statistics.subscriberCount;
    }

    if (this.props.setting.isLoading) {
      return (
        <div></div>
      )
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

                <div className="subscriber-button">
                  {this.renderSubscription()}
                </div>
              </div>
            </div>
            <ChannelNavbar currentRoute={this.state.currentRoute} />
          </div>
        </div>
      )
    }
  }
}

export default Channel;
