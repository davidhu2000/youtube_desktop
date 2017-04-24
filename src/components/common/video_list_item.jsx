import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { shortenString, formatNumber, parseDate, timeFromNow } from 'helpers';

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const vid = this.props.vid;
    const { description, title, channelTitle, publishedAt } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;

    let viewCount = '---';
    if (vid.statistics) {
      viewCount = vid.statistics.viewCount;
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
      <div className={`index-item`} style={{width: this.props.itemWidth }}>
        <Link to={`watch/${videoId}`} className={`index-item-left`}>
          <img src={url} />
        </Link>

        <div className={`index-item-right`}>
          <Link to={`watch/${videoId}`}>
            <h1>{ shortenString(title, maxTitleLength) }</h1>
          </Link>
          <div className='index-item-right-info'>
            <span className='channel-title'>{ shortenString(channelTitle, maxChannelTitleLength) }</span>
            <span className='view-count'> { formatNumber(viewCount, true) + ' Views'}</span>
            <span className='publish-date'> { timeFromNow(publishedAt) }</span>
          </div>
          <p>{ shortenString(description, maxDescriptionLength) }</p>
        </div>
      </div>
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