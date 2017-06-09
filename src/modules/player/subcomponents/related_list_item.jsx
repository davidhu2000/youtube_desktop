import React from 'react';
import PropTypes from 'prop-types';
import { hashHistory, Link } from 'react-router';
import autoBind from 'react-autobind';

class RelatedListItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  linkVideo() {
    let videoId = this.props.vid.id.videoId;
    hashHistory.push(`watch/${videoId}`);
  }

  render() {
    const vid = this.props.vid;
    const { title, channelTitle } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;
    const { videoId } = vid.id;

    return (
      <div className="related-item">
        <Link to={`watch/${videoId}`}>
          <img src={url} alt={title} />
        </Link>

        <div className="related-item-info">
          <h1>{title}</h1>
          <p>{channelTitle}</p>
        </div>
      </div>
    );
  }
}

RelatedListItem.propTypes = {
  vid: PropTypes.shape().isRequired
};

export default RelatedListItem;
