import React from 'react';
import ChannelNavbar from './channel_navbar';

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
  }

  componentWillReceiveProps(newProps) {
    let channelId = newProps.params.channelId;
    if (this.state.channelId !== channelId) {
      this.setState({ channelId });
      this._getNewChannelInfo(channelId);
    }
  }

  render() {
    console.log(this.props);
    let bannerImg;
    let profileImg;
    let channelName;

    if (this.props.channelDetails.detail) {
      bannerImg = this.props.channelDetails.detail.brandingSettings.image.bannerImageUrl;
      profileImg = this.props.channelDetails.detail.snippet.thumbnails.default.url;
      channelName = this.props.channelDetails.detail.snippet.title;
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
                <div className="channel-profile-container">
                  <img id="channel-profile-img"
                    src={profileImg} />
                </div>

                <div className="channel-detail">
                  <p id="channel-name">{channelName}</p>
                  <p id="channel-subscribers"></p>
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
