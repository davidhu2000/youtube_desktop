import React from 'react';
import PropTypes from 'prop-types';

  // >1300px large player, related on right
  // >1000px <1300px, medium player, related on right
  // >860px <1000px, large player, related on bottom
  // >660px <860px, medium player, related on bottom
  // <660px, small player, related on bottom

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      small: { width: 426, height: 240 },
      medium: { width: 640, height: 360 },
      large: { width: 854, height: 480 } 
    };
  }

  render() {
    let { playerSize } = this.props;
    let { height, width } = this.state[playerSize];
    return (
      <div>
        <iframe
          id="video-player"
          type="text/html"
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${this.props.videoId}?autoplay=1&rel=0`}
          frameBorder="0"
          allowFullScreen></iframe>
      </div>
    );
  }
}

Player.propTypes = {
  videoId: PropTypes.string,
  playerSize: PropTypes.string
};

export { Player };
