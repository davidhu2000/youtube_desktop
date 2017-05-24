import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { formatNumber, parseDuration, shortenString, timeFromNow } from 'helpers';

class ChannelVideos extends React.Component {
  constructor(props) {
    super(props);

    let videos = [];

    if (props.videos) {
      Object.keys(props.videos).map(video => videos.push(props.videos[video]));
    }

    this.state = {
      videos
    };
  }

  // TODO: parsing description method for longer description.

  latestUpload() {
    let vid = this.state.videos[0];

    if (vid) {
      const { description, publishedAt } = vid.snippet;
      const { url } = vid.snippet.thumbnails.medium;
      const title = shortenString(vid.snippet.title, 60);

      let viewCount = '------';
      if (vid.statistics) {
        viewCount = vid.statistics.viewCount;
      }
      viewCount = viewCount || '------';

      let videoId;
      if (typeof vid.id === 'string') {
        videoId = vid.id;
      } else {
        videoId = vid.id.videoId;
      }

      if (vid.contentDetails && vid.contentDetails.upload) {
        videoId = vid.contentDetails.upload.videoId;
      }

      let duration;
      if (vid.contentDetails && vid.contentDetails.duration) {
        duration = vid.contentDetails.duration;
        duration = parseDuration(duration);
      }

      return (
        <div className="latest-uploaded-video-container">
          <Link to={`watch/${videoId}`} className="latest-uploaded-left">
            <img src={url} alt={title} />
            <span className='duration-span'>{ duration }</span>
          </Link>

          <div className="latest-uploaded-right">
            <Link to={`watch/${videoId}`} className="latest-uploaded-title">
              <h1 className='latest-video-title'>{title}</h1>
            </Link>

            <div className="latest-video-info">
              <span>{ formatNumber(viewCount, true) } views</span>
              <span className='latest-video-date'>{ timeFromNow(publishedAt) } </span>
            </div>

            <div className='latest-video-description'>
              <p className='basic-text'>{description}</p>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="channel-videos-container">
        {this.latestUpload()}
      </div>
    );
  }
}

ChannelVideos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export { ChannelVideos };
