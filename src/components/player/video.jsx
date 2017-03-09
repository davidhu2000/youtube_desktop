import React from 'react';
import YouTubePlayer from 'youtube-player';

class Video extends React.Component {

  constructor(props) {
    super(props);

    this.player = null;
  }

  componentDidMount() {
    this.createPlayer();
  }

  createPlayer() {
    this.player = YouTubePlayer('video-player');
    this.player.loadVideoById('M7lc1UVf-VE');
  }

  render() {
    return (
      <span>
        <div id="video-player"></div>
      </span>
    );
  }
}

export default Video;
