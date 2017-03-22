import React from 'react';
import { Link } from 'react-router';

class RelatedListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const vid = this.props.vid;
    const { description, title, channelTitle, publishedAt } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;
    const { videoId } = vid.id.videoId;

    return (
      <div className="related-item">
        <Link to={`watch/${videoId}`} className="related-item-left">
          <img src={url} />
        </Link>

        <div className="related-item-right">
            <h1>{title}</h1>
            <p>{channelTitle}</p>
        </div>
      </div>
    );
  }
}

export default RelatedListItem;
