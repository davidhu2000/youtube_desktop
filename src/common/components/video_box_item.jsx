import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { formatNumber, parseDuration, shortenString, timeFromNow } from 'helpers';

class VideoBoxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const vid = this.props.vid;
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

    let duration;
    if(vid.contentDetails && vid.contentDetails.duration) {
      duration = vid.contentDetails.duration;
      duration = parseDuration(duration);
    }

    return (

      <div className="video-box-item">

        <Link to={`watch/${videoId}`} className="video-box-item-image">
          <img src={url} />
          <span className='duration-span'>{ duration }</span>
        </Link>

        <Link to={`watch/${videoId}`} className="video-box-item-title">
          <h1 className='video-title'>{title}</h1>
        </Link>

        <Link to={`channels/${channelId}`} className='video-box-item-channel'>
          <p className='basic-text'>{channelTitle}</p>
        </Link>

        <div className="video-box-item-info">
          <span>{ formatNumber(viewCount) } views</span>
          <span className='video-box-item-date'>{ timeFromNow(publishedAt) } </span>
        </div>
      </div>
    );
  }
}

VideoBoxItem.propTypes = {
  vid: PropTypes.object
};

export { VideoBoxItem };
