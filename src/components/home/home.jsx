import React from 'react';
import { VideoBox } from '../common';

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

    window.onresize = this.updateWindowSize.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      newProps.fetchRecommendedVideos();
    }
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  updateWindowSize() {
    this.setState({ windowWidth: window.innerWidth });
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
            channelId={id}
            windowWidth={this.state.windowWidth}
            title={title}
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
          multiline={true}
          vids={this.props.recommended.videos || []}
          windowWidth={this.state.windowWidth} />
      );
    }
  }

  render() {
    const { videos } = this.props.trending;

    if (videos) {
      return (
        <div className='home-page'>
          {this.renderRecommended()}
          <VideoBox
            title='Trending'
            windowWidth={this.state.windowWidth}
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

export default Home;
