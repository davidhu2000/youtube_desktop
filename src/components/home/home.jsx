import React from 'react';
import PropTypes from 'prop-types';
import { VideoBox } from '../common';
import { propChecker } from 'helpers';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth
    };
  }

  componentDidMount() {
    let ms = 24 * 3600 * 1000;
    let { trending } = this.props;
    if (Date.now() - trending.date > ms || !trending.videos) {
      this.props.fetchTrending();
    }

    let channelIds = [
      'UC-9-kyTW8ZkZNDHQJ6FgpwQ',
      'UCEgdi0XIXXZ-qJOFPf4JSKw',
      'UCOpNcN46UbXVtpKMrmU4Abg',
      'UClgRkhTL3_hImCAmdLfDE4g',
      'UCYfdidRxbB8Qhf0Nx7ioOYw',
      'UCBR8-60-B28hp2BmDPdntcQ',
      'UCOpcACMWblDls9Z6GERVi1A', // Screen Junkies for sample
    ];

    for (let i = 0; i < channelIds.length; i++) {
      const id = channelIds[i];
      this.props.fetchChannelVideos(id);
    }

    if (this.props.loggedIn) {
      this.props.fetchRecommendedVideos();
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.loggedIn && newProps.loggedIn) {
      newProps.fetchRecommendedVideos();
    }
  }

  renderChannels() {
    let channels = this.props.channels;

    let ids = Object.keys(channels);
    if (ids[0]) {
      return ids.map(id => {
        let channel = channels[id];
        let title = channel.videos[0].snippet.channelTitle;
        return (
          <VideoBox
            key={id}
            title={title}
            channelId={id}
            sidebarVisible={this.props.setting.sidebarVisible}
            windowWidth={this.props.setting.windowWidth}
            vids={channel.videos} />
        );
      });
    }
  }

  renderRecommended() {
    if (this.props.loggedIn && this.props.recommended.videos) {
      return (
        <VideoBox
          title='Recommended'
          sidebarVisible={this.props.setting.sidebarVisible}
          multiline={true}
          vids={this.props.recommended.videos || []}
          windowWidth={this.props.setting.windowWidth} />
      );
    }
  }

  render() {
    const { videos } = this.props.trending;

    if (videos) {
      return (
        <div id='main'>
          {this.renderRecommended()}
          <VideoBox
            title='Trending'
            sidebarVisible={this.props.setting.sidebarVisible}
            windowWidth={this.props.setting.windowWidth}
            vids={videos} />
          {this.renderChannels()}
        </div>
      );
    } else {
      return (
        <div className='home-page'></div>
      );
    }
  }
}

Home.propTypes = {
  fetchTrending: PropTypes.func.isRequired,
  fetchChannelInfo: PropTypes.func.isRequired,
  fetchChannelVideos: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchRecommendedVideos: PropTypes.func.isRequired,
  channels: propChecker.channels(),
  loggedIn: PropTypes.bool.isRequired,
  recommended: propChecker.recommended(),
  trending: propChecker.trending()
};

export default Home;
