import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { shortenString, formatNumber, timeFromNow, parseDuration } from 'helpers';

const VideoListItem = props => {
  const { vid, maxTitleLength, maxDescriptionLength, maxChannelTitleLength } = props;

  const { description, title, channelTitle, publishedAt } = vid.snippet;
  const { url } = vid.snippet.thumbnails.medium;

  let viewCount = 301;
  if (vid.statistics) {
    viewCount = vid.statistics.viewCount;
  }

  let duration;
  if (vid.contentDetails && vid.contentDetails.duration) {
    duration = vid.contentDetails.duration;
    duration = parseDuration(duration);
  }

  let videoId;
  if (typeof vid.id === 'string') {
    videoId = vid.id;
  } else {
    videoId = vid.id.videoId;
  }

  return (
    <Link
      className={`index-item`}
      style={{ width: props.itemWidth }}
      to={`watch/${videoId}`}
    >
      <div className={`index-item-left`}>
        <img src={url} alt={title} />
        <span className='duration-span'>{duration}</span>
      </div>

      <div className={`index-item-right`}>
        <h1>{shortenString(title, maxTitleLength)}</h1>

        <div className='index-item-right-info'>
          <span className='channel-title'>
            {shortenString(channelTitle, maxChannelTitleLength)}
          </span>
          <span className='view-count'>{`${formatNumber(viewCount, true)} Views`}</span>
          <span className='publish-date'>{timeFromNow(publishedAt)}</span>
        </div>
        <p>{shortenString(description, maxDescriptionLength)}</p>
      </div>
    </Link>
  );
};

VideoListItem.propTypes = {
  itemWidth: PropTypes.number.isRequired,
  maxTitleLength: PropTypes.number.isRequired,
  maxDescriptionLength: PropTypes.number.isRequired,
  maxChannelTitleLength: PropTypes.number.isRequired,
  vid: PropTypes.shape().isRequired
};

export { VideoListItem };
