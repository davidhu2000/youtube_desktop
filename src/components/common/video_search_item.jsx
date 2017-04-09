import React    from 'react';
import { Link } from 'react-router';

class VideoSearchItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const vid = this.props.vid;
    const { description, title, channelTitle, publishedAt } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;

    const { cssPrefix, maxTitleLength, maxDescriptionLength } = this.props;

    let videoId;
    if (typeof vid.id === 'string') {
      videoId = vid.id;
    } else {
      videoId = vid.id.videoId;
    }

    return (
      <div className={`${cssPrefix}index-item`}>
        <Link to={`watch/${videoId}`} className={`${cssPrefix}index-item-left`}>
          <img src={url} />
        </Link>

        <div className={`${cssPrefix}index-item-right`}>
          <Link to={`watch/${videoId}`}>
            <h1>{title.length > maxTitleLength ?
                title.slice(0, maxTitleLength - 3)+'...' : title}</h1>
          </Link>
          <p>{channelTitle}</p>
          <p>{description.length > maxDescriptionLength ?
              description.slice(0, maxDescriptionLength - 3) + '...' : description}</p>
        </div>
      </div>
    );
  }
}

VideoSearchItem.defaultProps = {
  cssPrefix: '',
  maxTitleLength: 80,
  maxDescriptionLength: 123
}

export { VideoSearchItem };
