import React from 'react';
import { Link } from 'react-router';

class CategoryBoxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const vid = this.props.vid;
    const { description, title, channelTitle, publishedAt } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;

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
          <h1>{title}</h1>
        </Link>

        <Link to='#' className='category-box-item-channel'>
          <p>{channelTitle}</p>
        </Link>

        <div className="category-box-item-info">
          <span>{ '####'} views</span> *
          <span>{ ' some time ago'} </span>
        </div>
      </div>
    );
  }
}

export { CategoryBoxItem };
