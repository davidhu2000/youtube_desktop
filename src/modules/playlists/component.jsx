/* global Promise */
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { propChecker } from 'helpers';
import { PlaylistVideos } from './subcomponents';

class Playlists extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentDidMount() {
    this.props.receiveSetting({ isLoading: true });
    this.getPlaylistsItems();
  }

  getPlaylistsItems() {
    let dataNeeded = [];

    let channelId = this.props.channelDetails.detail.id;
    let playlists = this.props.playlists[channelId];

    Object.keys(playlists).forEach(id => {
      dataNeeded.push(this.props.fetchPlaylistItems(id));
    });

    Promise.all(dataNeeded).then(() => this.props.receiveSetting({ isLoading: false }));
  }

  renderPlaylist() {
    let playlistsList = this.props.playlists.playlistsList || {};

    return Object.keys(playlistsList).map(playlistId => (
      <PlaylistVideos
        key={playlistId}
        playlistId={playlistId}
        playlistItems={playlistsList[playlistId]}
      />
    ));
  }

  render() {
    // let channelId = this.props.channelDetails.detail.id;
    // let playlists = this.props.playlists[channelId];

    if (this.props.setting.isLoading) {
      return (
        <div />
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

// TODO: update type checks for channelDetails and playlists
Playlists.propTypes = {
  receiveSetting: PropTypes.func.isRequired,
  fetchPlaylistItems: PropTypes.func.isRequired,
  setting: propChecker.setting().isRequired,
  channelDetails: PropTypes.shape().isRequired,
  playlists: PropTypes.shape().isRequired
};

export default Playlists;
