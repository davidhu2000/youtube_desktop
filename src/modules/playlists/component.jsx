import React from 'react';
import { PlaylistVideos } from './subcomponents';

class Playlists extends React.Component {
  constructor(props) {
    super(props);

    this.getPlaylistsItems = this.getPlaylistsItems.bind(this);
  }

  _getNewChannelInfo(channelId, userId) {
    let dataNeeded = [];
    dataNeeded.push(this.props.getPlaylistsItems());

    Promise.all(dataNeeded).then( res => this.props.receiveSetting({ isLoading: false }));
  }

  componentDidMount() {
    let channelId = this.props.channelDetails.detail.id;

    this.props.fetchChannelPlaylists(channelId).then(
      this.getPlaylistsItems
    );

    this.props.receiveSetting({ isLoading: true });
    this._getNewChannelInfo(this.state.channelId, this.state.userId);
  }

  getPlaylistsItems() {
    let channelId = this.props.channelDetails.detail.id;
    let playlists = this.props.playlists[channelId];

    return playlists.map(playlist => {
      this.props.fetchPlaylistItems(playlist.id)
    });
  }

  renderPlaylist() {
    let channelId = this.props.channelDetails.detail.id;
    let playlistsList = this.props.playlists.playlistsList;

    return Object.keys(playlistsList).map(playlistId => {
      <PlaylistVideos
        id={Math.random()}
        playlistId={playlistId}
        playlistItems={playlistsList[playlistId]} />
    });
  }

  render() {
    let channelId = this.props.channelDetails.detail.id;
    let playlists = this.props.playlists[channelId];

    if (this.props.playlists.playlistsList) {
      if (Object.keys(this.props.playlists.playlistsList).length === playlists.length) {
        return (
          <div>
            {this.renderPlaylist()}
          </div>
        )
      } else {
        return (
          <div></div>
        )
      }
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Playlists;
