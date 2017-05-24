/* global document */
import React from 'react';
import PropTypes from 'prop-types';

class ChannelNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoute: this.props.currentRoute
    };

    this.renderHome = this.renderHome.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
    this.renderPlaylists = this.renderPlaylists.bind(this);
    this.renderChannels = this.renderChannels.bind(this);
    this.renderAbout = this.renderAbout.bind(this);
  }

  componentDidMount() {
    this.activeLink("home");
  }

  // TODO: Logic for sidebar to override resize behavior and have sliding effect in full size screen

  activeLink(route) {
    let menus = ["home", "videos", "playlists", "channels", "about"];

    for (let i = 0; i < menus.length; i++) {
      if (route === menus[i]) {
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
    return (
      <div className="channel-navbar-container">
        <ul className="channel-navbar-lists">
          <li role="presentation" id="channel-home" onClick={this.renderHome}>
            Home
          </li>
          <li role="presentation" id="channel-videos" onClick={this.renderVideos}>
            Videos
          </li>
          <li role="presentation" id="channel-playlists" onClick={this.renderPlaylists}>
            Playlists
          </li>
          <li role="presentation" id="channel-channels" onClick={this.renderChannels}>
            Channels
          </li>
          <li role="presentation" id="channel-about" onClick={this.renderAbout}>
            About
          </li>
          <li><i className="material-icons">search</i></li>
        </ul>
      </div>
    );
  }
}

ChannelNavbar.propTypes = {
  currentRoute: PropTypes.string.isRequired
};

export { ChannelNavbar };
