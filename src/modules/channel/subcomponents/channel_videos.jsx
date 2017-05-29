import React from 'react';
import PropTypes from 'prop-types';
import { VideoBoxItem, Videobox } from 'common/components';

class ChannelVideos extends React.Component {

  render() {
    console.log(this.props)
    const { videos } = this.props;

    return (
      <div className="channel-videos">
        { videos.map(video => (
          <VideoBoxItem vid={video} />
        ))}
      </div>
    );
  }
}

ChannelVideos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape())
};

export { ChannelVideos };
