import React from 'react';
import { PlaylistVideos } from './subcomponents';

class Playlists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    let channelId = this.props.channelDetails.detail.id;

    this.props.fetchChannelPlaylists(channelId);
  }

  renderPlaylist() {
    let channelId = this.props.channelDetails.detail.id;
    console.log(channelId);
    let playlists = this.props.playlists[channelId];

    return playlists.map(playlist => (
      <PlaylistVideos
        key={Math.random()}
        playlistId={playlist.id}
        playlist={playlist} />
    ));
  }

  render() {
    console.log(this.props);

    return (
      <div>
        {Object.keys(this.props.playlists).length > 0 && this.renderPlaylist()}
      </div>
    );
  }
}

export default Playlists;
