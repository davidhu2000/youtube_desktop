/* global document */
import React from 'react';
import PropTypes from 'prop-types';

class ChannelNavbar extends React.Component {
  componentDidMount() {
    this.activeLink(this.props.currentRoute);
  }

  componentWillReceiveProps(newProps) {
    this.activeLink(newProps.currentRoute);
  }

  activeLink(route) {
    let menus = ["home", "videos", "playlists", "about"];

    for (let i = 0; i < menus.length; i++) {
      if (route === menus[i]) {
        document.getElementById(`channel-${route}`).classList.add('current-channel');
      } else {
        document.getElementById(`channel-${menus[i]}`).classList.remove('current-channel');
      }
    }
  }

  render() {
    const { updateRoute } = this.props;
    return (
      <div className="channel-navbar-container">
        <ul className="channel-navbar-lists">
          <li role="presentation" id="channel-home" onClick={() => updateRoute('home')}>
            Home
          </li>
          <li role="presentation" id="channel-videos" onClick={() => updateRoute('videos')}>
            Videos
          </li>
          <li role="presentation" id="channel-playlists" onClick={() => updateRoute('playlists')}>
            Playlists
          </li>
          <li role="presentation" id="channel-about" onClick={() => updateRoute('about')}>
            About
          </li>
          <li><i className="material-icons">search</i></li>
        </ul>
      </div>
    );
  }
}

ChannelNavbar.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  updateRoute: PropTypes.func.isRequired
};

export { ChannelNavbar };
