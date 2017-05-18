/* global window, YT, document */
import React from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';

class Player extends React.Component {
  static onPlayerReady(event) {
    event.target.playVideo();
  }

  constructor(props) {
    super(props);

    this.loadYT = null;
    this.player = null;
    this.nextVideoId = this.props.nextVideoId;
  }

  // Youtube iframe API loads asynchronously, so we use a Promise here to load it
  // so the component doesn't break
  componentDidMount() {
    if (window.YT) {
      this.player = new YT.Player('video-player', {
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange.bind(this)
        }
      });
    } else {
      if (!this.loadYT) {
        this.loadYT = new Promise(resolve => {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          window.onYouTubeIframeAPIReady = () => resolve(window.YT);
        });
      }
      this.loadYT.then(YT => {
        this.player = new YT.Player('video-player', {
          events: {
            onReady: this.onPlayerReady,
            onStateChange: this.onPlayerStateChange.bind(this)
          }
        });
      });
    }
  }

  onPlayerStateChange(event) {
    if (event.data === 0 && this.props.autoplay) {
      hashHistory.push(`watch/${this.nextVideoId}`);
    }
  }

  render() {
    let { height, width } = this.props;

    return (
      <div>
        <iframe
          id="video-player"
          title="video-player"
          type="text/html"
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${this.props.videoId}?enablejsapi=1&autoplay=1&rel=0`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

Player.propTypes = {
  videoId: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  nextVideoId: PropTypes.string.isRequired,
  autoplay: PropTypes.bool.isRequired
};

export { Player };
