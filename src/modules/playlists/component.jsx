/* global Promise */
import React from 'react';
import { PlaylistVideos } from './subcomponents';

class Playlists extends React.Component {
  constructor(props) {
    super(props);

    this.getPlaylistsItems = this.getPlaylistsItems.bind(this);
  }

  componentDidMount() {
    this.props.receiveSetting({ isLoading: true });
    this.getPlaylistsItems();
  }

  getPlaylistsItems() {
    let dataNeeded = [];

    let channelId = this.props.channelDetails.detail.id;
    let playlists = this.props.playlists[channelId];

    // playlists.forEach(playlist => {
    //   // console.log(playlist)
    //   dataNeeded.push(this.props.fetchPlaylistItems(playlist.id));
    // });

    for(let playlist of playlists) {
      dataNeeded.push(this.props.fetchPlaylistItems(playlist.id));
    }

    Promise.all(dataNeeded).then( res => this.props.receiveSetting({ isLoading: false }));
  }

  renderPlaylist() {
    let channelId = this.props.channelDetails.detail.id;
    let playlistsList = this.props.playlists.playlistsList || {};

    return Object.keys(playlistsList).map(playlistId => {
      return (
        <PlaylistVideos
          key={playlistId}
          playlistId={playlistId}
          playlistItems={playlistsList[playlistId]} 
        />
      );
    });
  }

  render() {
    let channelId = this.props.channelDetails.detail.id;
    let playlists = this.props.playlists[channelId];

    if (this.props.setting.isLoading) {
      return (
        <div>       
        </div>
      );    
    } else {
      return (
        <div>
          {this.renderPlaylist()}
        </div>
      );
    }
  }
}

export default Playlists;
