import React            from 'react';
import { Link }         from 'react-router';
import moment           from 'moment';
import { formatNumber } from '../../helpers';

class CategoryBoxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  parseTitle(title) {
    if (title.length >  60) {
      let idx = 57;
      title = title.slice(0, idx);

      while(title[idx] !== ' ') {
        idx -= 1;
      }
      idx -= 1;
      title = title.slice(0, idx) + '...';
    }
    return title;
  }

  render () {
    const vid = this.props.vid;
    const { channelTitle, publishedAt } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;
    const title = this.parseTitle(vid.snippet.title);
    let viewCount = '------';
    if (vid.statistics) {
      viewCount = vid.statistics.viewCount;
    }

    let videoId;
    if (typeof vid.id === 'string') {
      videoId = vid.id;
    } else {
      videoId = vid.id.videoId;
    }

    return (
      <div className="category-box-item">

        <Link to={`watch/${videoId}`} className="">
          <img src={url} />
        </Link>

        <Link to={`watch/${videoId}`} className="category-box-item-title">
          <h1 className='video-title'>{title}</h1>
        </Link>

        <Link to='#' className='category-box-item-channel'>
          <p className='basic-text'>{channelTitle}</p>
        </Link>

        <div className="category-box-item-info">
          <span className='basic-text'>{ formatNumber(viewCount) } views</span>
          <span className='category-box-item-date basic-text'>{ moment(publishedAt).fromNow() } </span>
        </div>
      </div>
    );
  }
}

export { CategoryBoxItem };
