import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { shortenString, formatNumber, parseDate, timeFromNow, parseDuration } from 'helpers';

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const vid = this.props.vid;
    const { description, title, channelTitle, publishedAt, channelId } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;

    let viewCount = '---';
    if (vid.statistics) {
      viewCount = vid.statistics.viewCount;
    }

    let duration;
    if(vid.contentDetails && vid.contentDetails.duration) {
      duration = vid.contentDetails.duration;
      duration = parseDuration(duration);
    }

    const { 
      cssPrefix, 
      maxTitleLength, 
      maxDescriptionLength,
      maxChannelTitleLength } = this.props;

    let videoId;
    if (typeof vid.id === 'string') {
      videoId = vid.id;
    } else {
      videoId = vid.id.videoId;
    }

    return (
      <Link className={`index-item`} style={{width: this.props.itemWidth }} to={`watch/${videoId}`}>
        <div className={`index-item-left`}>
          <img src={url} />
          <span className='duration-span'>{ duration }</span>
        </div>

        <div className={`index-item-right`}>
          <h1>{ shortenString(title, maxTitleLength) }</h1>

          <div className='index-item-right-info'>
            <span className='channel-title'>{ shortenString(channelTitle, maxChannelTitleLength) }</span>
            <span className='view-count'> { formatNumber(viewCount, true) + ' Views'}</span>
            <span className='publish-date'> { timeFromNow(publishedAt) }</span>
          </div>
          <p>{ shortenString(description, maxDescriptionLength) }</p>
        </div>
      </Link>
    );
  }
}

VideoListItem.propTypes = {
  itemWidth: PropTypes.number,
  maxTitleLength: PropTypes.number,
  maxDescriptionLength: PropTypes.number,
  maxChannelTitleLength: PropTypes.number,
  vid: PropTypes.object
};

export { VideoListItem };