import React from 'react';
import PropTypes from 'prop-types';
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
        <div className='home-page'>
          {this.renderRecommended()}
          <VideoBox
            title='Trending' 
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
  loggedIn: PropTypes.bool.isRequired,
  trending: PropTypes.shape({
    date: PropTypes.number,
    videos: PropTypes.arrayOf(PropTypes.object)
  }),
  channels: (props, propName, componentName) => {
    let type = 'object';
    if(!(new RegExp(type)).test(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        Expecting an object with id as keys and ${type} as values.`
      );
    }
  },
  recommended: PropTypes.shape({
    videos: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Home;
