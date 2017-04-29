import React         from 'react';
import PropTypes     from 'prop-types';
// import YouTubePlayer from 'youtube-player';

class Player extends React.Component {

  constructor(props) {
    super(props);

    this.player = null;
    this.state = {
      height: 390,
      width: 640
    };

  }

  updateHeight() {
    this.setState({
      height: this.state.height + 100,
      width: this.state.width + 100
    });
  }

  render() {
    return (
      <div>
        <iframe 
          id="video-player" 
          type="text/html" 
          width={this.state.width} 
          height={this.state.height}
          src={`https://www.youtube.com/embed/${this.props.videoId}?autoplay=1`}
          frameBorder="0" 
          allowFullScreen></iframe>
      </div>
    );
  }
}

Player.propTypes = {
  videoId: PropTypes.string
};

export default Player;
