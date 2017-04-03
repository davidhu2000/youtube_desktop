import React from 'react';

class SmlVideoSearchItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { description, title, channelTitle, publishedAt } = this.props.vid.snippet;
    const { url } = this.props.vid.snippet.thumbnails.medium;

    return (
      <div className="sml-index-item">
        <div className="sml-index-item-left">
          <img src={url} />
        </div>
        <div className="sml-index-item-right">
            <h1>{title}</h1>
            <p>{channelTitle}</p>
            <p>{description.slice(0, 40) + '...'}</p>
        </div>
      </div>
    );
  }
}

export { SmlVideoSearchItem };
