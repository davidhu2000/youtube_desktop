import React from 'react';
import { Link } from 'react-router';

class SmlVideoSearchItem extends React.Component {
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
      <div className="sml-index-item">
        <Link to={`watch/${videoId}`} className="sml-index-item-left">
          <img src={url} />
        </Link>
        <div className="sml-index-item-right">
            <h1>{title.length > 33 ? title.slice(0, 30)+'...' : title}</h1>
            <p>{channelTitle}</p>
            <p>{description.slice(0, 40) + '...'}</p>
        </div>
      </div>
    );
  }
}

export { SmlVideoSearchItem };
