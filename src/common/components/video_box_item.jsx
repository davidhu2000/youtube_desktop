import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { formatNumber, parseDuration, shortenString, timeFromNow } from 'helpers';

const VideoBoxItem = ({ vid }) => {
  const { channelId, channelTitle, publishedAt } = vid.snippet;
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

  if (vid.snippet.resourceId && vid.snippet.resourceId.videoId) {
    videoId = vid.snippet.resourceId.videoId;
  }

  let duration;
  if (vid.contentDetails && vid.contentDetails.duration) {
    duration = vid.contentDetails.duration;
    duration = parseDuration(duration);
  }

  return (
    <div className="video-box-item">

      <div className="video-box-item-upper">
        <Link to={`watch/${videoId}`} className="video-box-item-image">
          <img src={url} alt={title} />
          <span className='duration-span'>{ duration }</span>
        </Link>

        <Link to={`watch/${videoId}`} className="video-box-item-title">
          <h1 className='video-title'>{shortenString(title, 60)}</h1>
        </Link>
      </div>

      <div className="video-box-item-lower">
        <Link to={`channels/${channelId}`} className='video-box-item-channel'>
          <p className='basic-text'>{channelTitle}</p>
        </Link>

        <div className="video-box-item-info">
          <span>{ formatNumber(viewCount) } views</span>
          <span className='video-box-item-date'>{ timeFromNow(publishedAt) } </span>
        </div>
      </div>

    </div>
  );
};


VideoBoxItem.propTypes = {
  vid: PropTypes.shape().isRequired
};

export { VideoBoxItem };
