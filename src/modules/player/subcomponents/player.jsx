import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { height, width } = this.props;
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
  height: PropTypes.number,
  width: PropTypes.number
};

export { Player };
