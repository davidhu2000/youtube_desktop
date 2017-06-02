import React from 'react';
import PropTypes from 'prop-types';
import { VideoBoxItem } from 'common/components';

const ChannelVideos = ({ videos }) => (
  <div className="channel-videos">
    { videos.map(video => (
      <VideoBoxItem key={Math.random()} vid={video} />
    ))}
  </div>
);

ChannelVideos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export { ChannelVideos };
