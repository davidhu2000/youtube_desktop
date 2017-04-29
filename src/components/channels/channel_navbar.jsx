import React from 'react';

class ChannelNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="channel-navbar-container">
        <ul className="channel-navbar-lists">
          <li>Home</li>
          <li>Videos</li>
          <li>Playlists</li>
          <li>Channels</li>
          <li>Discussion</li>
          <li>About</li>
          <li><i className="material-icons">search</i></li>
        </ul>
      </div>
    )
  }
}

export default ChannelNavbar;
