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
    let bannerImg;
    let profileImg;

    if (this.props.channelDetails.detail) {
      bannerImg = this.props.channelDetails.detail.brandingSettings.image.bannerImageUrl;
      profileImg = this.props.channelDetails.detail.snippet.thumbnails.default.url;
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
              <div className="channel-profile-img-container">
                <img id="channel-profile-img"
                     src={profileImg} />
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
