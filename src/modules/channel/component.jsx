/* global Promise */
import React from 'react';
import { values } from 'lodash';
import PropTypes from 'prop-types';
import { formatNumber, propChecker } from 'helpers';
import { SubscribeButton, VideoBox } from 'common/components';

import {
  ChannelNavbar,
  ChannelVideos,
  ChannelHome,
  ChannelPlaylists,
  ChannelAbout
} from './subcomponents';

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
    this.updateRoute = this.updateRoute.bind(this);
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

    Promise.all(dataNeeded).then(() => {
      let playlists = this.props.playlists;
      let plDataNeeded = [];

      Object.keys(playlists).forEach(id => plDataNeeded.push(this.props.fetchPlaylistItems(id)));

      Promise.all(plDataNeeded).then(() => {
        this.props.receiveSetting({ isLoading: false });
      });
    });
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

  updateRoute(currentRoute) {
    this.setState({ currentRoute });
  }

  renderPlaylists() {
    return values(this.props.playlists).map(playlist => (
      <VideoBox
        key={playlist.id}
        title={playlist.snippet.title}
        vids={playlist.items}
        maxNumber={playlist.items.length}
        windowWidth={this.props.setting.windowWidth}
        sidebarVisible={this.props.setting.sidebarVisible}
        widthDeduction={120}
      />
    ));
  }

  renderRoute() {
    let { channelDetails, playlists, setting } = this.props;

    switch (this.state.currentRoute) {
      case 'videos':
        return <ChannelVideos videos={channelDetails.videos} />;
      case 'playlists':
        return <ChannelPlaylists />;
      case 'about':
        let { description } = channelDetails.detail.brandingSettings.channel;
        let { viewCount } = channelDetails.detail.statistics;

        return <ChannelAbout description={description} viewCount={viewCount} />;
      default:
        return (
          <ChannelHome
            videos={channelDetails.videos}
            playlists={playlists}
            setting={setting}
          />
        );
    }
  }

  render() {
    let bannerImg;
    let profileImg;
    let channelName;
    let subscriberNum;
    let channelId;

    let { channelDetails, subscriptions, deleteSubscription, insertSubscription } = this.props;

    if (channelDetails.detail) {
      let { detail } = channelDetails;

      bannerImg = detail.brandingSettings.image.bannerImageUrl;
      profileImg = detail.snippet.thumbnails.default.url;
      channelName = detail.snippet.title;
      subscriberNum = parseInt(detail.statistics.subscriberCount, 10);
      channelId = detail.id;
    }

    if (this.props.setting.isLoading) {
      return (
        <div />
      );
    } else {
      return (
        <div className="main-content">
          <div className="channels-container">
            <div className="channel-banner-container">
              <img id="channel-banner" src={bannerImg} alt={channelName} />
            </div>

            <div className="channel-banner-header">
              <div className="channel-detail-container">
                <div className="channel-detail-left">
                  <div className="channel-profile-container">
                    <img id="channel-profile-img" src={profileImg} alt={channelName} />
                  </div>

                  <div className="channel-detail">
                    <p id="channel-name">{channelName}</p>
                    <p id="channel-subscribers">{formatNumber(subscriberNum)} subscribers</p>
                  </div>
                </div>

                <SubscribeButton
                  insertSubscription={insertSubscription}
                  deleteSubscription={deleteSubscription}
                  subscriptions={subscriptions}
                  subscriberNum={subscriberNum}
                  channelId={channelId}
                />
              </div>
            </div>

            <ChannelNavbar
              updateRoute={this.updateRoute}
              currentRoute={this.state.currentRoute}
            />

            { this.renderRoute() }

          </div>
        </div>
      );
    }
  }
}

Channel.propTypes = {
  fetchChannelDetails: PropTypes.func.isRequired,
  receiveSetting: PropTypes.func.isRequired,
  fetchSubscriptions: PropTypes.func.isRequired,
  fetchChannelVideos: PropTypes.func.isRequired,
  fetchChannelPlaylists: PropTypes.func.isRequired,
  fetchPlaylistItems: PropTypes.func.isRequired,
  insertSubscription: PropTypes.func.isRequired,
  deleteSubscription: PropTypes.func.isRequired,
  channelDetails: PropTypes.shape().isRequired,
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape(),
  setting: propChecker.setting().isRequired,
  subscriptions: propChecker.subscriptions(),
  playlists: PropTypes.shape().isRequired,
  params: PropTypes.shape({
    channelId: PropTypes.string
  }).isRequired
};

Channel.defaultProps = {
  user: {},
  subscriptions: {}
};

export default Channel;
