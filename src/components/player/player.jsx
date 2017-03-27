import React from 'react';
import YouTubePlayer from 'youtube-player';

class Player extends React.Component {

  constructor(props) {
    super(props);

    this.player = null;
  }

  componentDidMount() {
    this.createPlayer();
  }

  createPlayer() {
    this.player = YouTubePlayer('video-player');
    this.player.loadVideoById(this.props.videoId);
  }

  render() {
    return (
      <span>
        <div id="video-player"></div>
      </span>
    );
  }
}

export default Player;
