import React from 'react';
import ChannelNavbar from './channel_navbar';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channelId: this.props.params.channelId
    };
  }

  componentDidMount() {
    this.props.fetchChannelDetails(this.props.params.channelId);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.channelId !== newProps.params.channelId) {
      let channelId = this.props.params.channelId;

      this.props.fetchChannelDetails(channelId);

      this.setState({
        channelId
      });
    }
  }

  render() {
    let bannerImg;

    if (this.props.channelDetails.detail) {
      bannerImg = this.props.channelDetails.detail.brandingSettings.image.bannerImageUrl
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

            </div>
            <ChannelNavbar />
          </div>
        </div>
      )
    }
  }
}

export default Channel;
