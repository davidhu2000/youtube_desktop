import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router';

import { fetchChannelVideos,
         fetchChannelDetails } from '../../actions/youtube_video_actions';
import { VideoBox } from '../common';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth
    };
  }

  componentWillMount() {
    this.props.fetchChannelVideos(this.props.channelId);
    this.props.fetchChannelDetails(this.props.channelId);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize.bind(this));
  }

  updateWindowSize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  renderVideos() {
    let channelId = this.props.channelId;
    let channelInfo = this.props.channels[channelId];
    let videos = channelInfo ? channelInfo.videos : "";
    let title = videos ? videos[0].snippet.channelTitle : "";

    return (
      <VideoBox
        key={channelId}
        channelId={channelId}
        windowWidth={this.state.windowWidth}
        title={title}
        vids={videos} />
    )
  }

  render() {
    let channelId = this.props.channelId;
    console.log(this.props);

    return (
      <div className='channel'>
        <div className="banner-container">
          <img id="banner" src="./app/assets/banner1.jpg"/>
        </div>
        <div className="channel-banner">
          <div className="channel-banner-left">
            <img id="channel-profile" src="./app/assets/sample_channel_profile.png"/>
            <div id="channel-details">
              <span id="channel-owner-name">Raymond Lee</span>
              <span id="channel-owner-subscribers">1,086,814 subscribers</span>
            </div>
          </div>
          <div className="channel-banner-right">
            <div id="subscribe-button"><span>SUBSCRIBED</span> <span id="subscribed-num">1M</span></div>
          </div>
        </div>
        <div id="banner-bar"></div>
        <div id="channel-navbar">
          <ul>
            <li>Home</li>
            <li>Videos</li>
            <li>Playlists</li>
            <li>Channels</li>
            <li>Discussion</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <div>Main Video</div>
          <div>Main Video Description</div>
        </div>
        <div>
          {this.props.channels[channelId] && this.renderVideos()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.params.channelId,
  channels: state.channels
});

const mapDispatchToProps = dispatch => ({
  fetchChannelVideos: id => dispatch(fetchChannelVideos(id)),
  fetchChannelDetails: id => dispatch(fetchChannelDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Channel));
