import React from 'react';

class PlaylistVideos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.playlist.snippet.thumbnails.default.url}/>
      </div>
    )
  }
}

export { PlaylistVideos };
