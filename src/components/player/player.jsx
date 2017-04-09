import React         from 'react';
import YouTubePlayer from 'youtube-player';

class Player extends React.Component {

  constructor(props) {
    super(props);

    this.player = null;
  }

  componentDidMount() {
    this.createPlayer(this.props.videoId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.videoId !== this.props.videoId) {
      this.player.loadVideoById(newProps.videoId);
    }
  }

  createPlayer(videoId) {
    this.player = YouTubePlayer('video-player', {
      playerVars: { rel: 0, modestbranding: 1, showinfo: 0 }
    });
    this.player.loadVideoById(videoId);

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
