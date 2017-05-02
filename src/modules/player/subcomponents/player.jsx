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
      playerSize: {
        small: { width: 426, height: 240 },
        medium: { width: 640, height: 360 },
        large: { width: 854, height: 480 } 
      },
      currentSize: 'medium'
    };
  }

  componentDidMount() {
    this.updateHeight(this.props.windowWidth);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.windowWidth !== newProps.width) {
      this.updateHeight(newProps.windowWidth);
    }
  }

  updateHeight(width) {
    if (width > 1300) {
      this.setState({ currentSize: 'large' });
    } else if (width > 1000) {
      this.setState({ currentSize: 'medium' });
    } else if (width > 860) {
      this.setState({ currentSize: 'large' });
    } else if (width > 660) {
      this.setState({ currentSize: 'medium'});
    } else {
      this.setState({ currentSize: 'small' });
    }
  }

  render() {
    let { currentSize } = this.state;
    let { height, width } = this.state.playerSize[currentSize];
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
  windowWidth: PropTypes.number
};

export { Player };
