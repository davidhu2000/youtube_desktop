import React                 from 'react';
import { hashHistory, Link } from 'react-router';

class RelatedListItem extends React.Component {
  constructor(props) {
    super(props);

    this.linkVideo = this.linkVideo.bind(this);
  }

  linkVideo() {
    let videoId = this.props.vid.id.videoId;
    hashHistory.push(`watch/${videoId}`);
    // location.reload();
  }

  render () {
    const vid = this.props.vid;
    const { description, title, channelTitle, publishedAt } = vid.snippet;
    const { url } = vid.snippet.thumbnails.default;
    const { videoId } = vid.id;

    return (
      <div className="related-item">
        <Link to={`watch/${videoId}`}>

          <img src={url} />
        </Link>

        <div className="related-item-info">
            <h1>{title}</h1>
            <p>{channelTitle}</p>
        </div>
      </div>
    );
  }
}

export default RelatedListItem;
