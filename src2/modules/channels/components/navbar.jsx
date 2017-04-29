import React from 'react';

class ChannelNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoute: this.props.currentRoute
    };
  }

  componentDidMount() {
    this.activeLink("home");
  }

  // TODO: Logic for sidebar to override resize behavior and have sliding effect in full size screen

  activeLink(route) {
    let menus = ["home", "videos", "playlists", "channels", "about"]

    for (var i = 0; i < menus.length; i++) {
      if (route == menus[i]) {
        document.getElementById(`channel-${route}`).classList.add('current-channel');
      } else {
        document.getElementById(`channel-${menus[i]}`).classList.remove('current-channel');
      }
    }
  }

  renderHome() {
    this.setState({ currentRoute: "home" });
    this.activeLink("home");
  }

  renderVideos() {
    this.setState({ currentRoute: "videos" });
    this.activeLink("videos");
  }

  renderPlaylists() {
    this.setState({ currentRoute: "playlists" });
    this.activeLink("playlists");
  }

  renderChannels() {
    this.setState({ currentRoute: "channels" });
    this.activeLink("channels");
  }

  renderAbout() {
    this.setState({ currentRoute: "about" });
    this.activeLink("about");
  }

  render() {
    let currentRoute = this.props.currentRoute;

    return (
      <div className="channel-navbar-container">
        <ul className="channel-navbar-lists">
          <li id="channel-home" onClick={this.renderHome.bind(this)}>Home</li>
          <li id="channel-videos" onClick={this.renderVideos.bind(this)}>Videos</li>
          <li id="channel-playlists" onClick={this.renderPlaylists.bind(this)}>Playlists</li>
          <li id="channel-channels" onClick={this.renderChannels.bind(this)}>Channels</li>
          <li id="channel-about" onClick={this.renderAbout.bind(this)}>About</li>
          <li><i className="material-icons">search</i></li>
        </ul>
      </div>
    )
  }
}

export default ChannelNavbar;
