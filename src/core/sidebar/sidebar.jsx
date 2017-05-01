import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';
import { propChecker, toggleSidebar } from 'helpers';
import { values } from 'lodash';

import SidebarItem from './sidebar_item';
import ContributorSection from './contributor_section';
import SubscriptionSection from './subscription_section';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numPlaylistShowing: 2,
      buttonVal: 'Show More',
      icon: 'keyboard_arrow_down'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let sidebar = document.getElementById('sidebar');
    let cover = document.getElementById('sidebar-cover');
    cover.classList.add('hidden');

    // render sidebar with the correct behavior based on window width
    if (window.innerWidth > 1312 && !this.props.params.channelId) {
      sidebar.classList.remove('fixed', 'offscreen');
      sidebar.classList.add('absolute', 'ondocument');
    } else {
      sidebar.classList.remove('absolute', 'ondocument');
      sidebar.classList.add('fixed', 'offscreen');
    }
  }

  componentWillReceiveProps(newProps) {
    let cover = document.getElementById('sidebar-cover');
    let sidebar = document.getElementById('sidebar');

    // update sidebar visibility if the window size crosses the threshold.
    let newWidth = newProps.setting.windowWidth;
    let oldWidth = this.props.setting.windowWidth;

    if (oldWidth > 1312 && newWidth <= 1312) {
      sidebar.classList.remove('absolute', 'ondocument', 'hidden', 'onscreen');
      sidebar.classList.add('fixed', 'offscreen');
      cover.classList.add('hidden');
    } else if (!this.props.params.channelId && oldWidth <= 1312 && newWidth > 1312) {
      sidebar.classList.remove('fixed', 'onscreen', 'offscreen');
      sidebar.classList.add('absolute', 'ondocument');
      cover.classList.add('hidden');
    }
  }

  handleClick(e) {
    let narrowWindow = window.innerWidth < 1312;
    let notOnChannelPage =  !!this.props.params.channelId;
    let correctClassName = e.target.className;
    let correctTags = ['I', 'SPAN', 'IMG', 'A'].includes(e.target.tagName);

    let notShowMore = !e.target.innerHTML.includes('Show ') && !e.target.innerHTML.includes('keyboard_arrow_');

    if ((narrowWindow || notOnChannelPage) && notShowMore && (correctClassName || correctTags)) {
      toggleSidebar();
    }
  }

  // update with real playlists from api call
  renderUserPlaylists() {
    return ['playlist1', 'playlist2', 'playlist3', 'playlist4'].slice(0, this.state.numPlaylistShowing).map( playlist => {
      return (
        <SidebarItem key={playlist} link='' span={playlist} icon="playlist_play" />
      );
    });
  }

  togglePlaylists() {
    let numPlaylistShowing, buttonVal, icon;
    if (this.state.numPlaylistShowing === 2) {
      numPlaylistShowing = 4;
      buttonVal = 'Show Less';
      icon='keyboard_arrow_up';
    } else {
      numPlaylistShowing = 2;
      buttonVal = 'Show More';
      icon='keyboard_arrow_down';
    }

    this.setState({ numPlaylistShowing, buttonVal, icon });
  }

  render() {
    return (
      <div id="sidebar" className={`sidebar`} onClick={this.handleClick}>
        {/* Header section */}
        <div className='sidebar-section' id='sidebar-header'>
          <div className='sidebar-item'>

            <i className="material-icons">menu</i>
            <Link to='/home'>
              <img className='youtube-logo' src="./app/assets/Youtube-logo.png" />
            </Link>
          </div>
        </div>

        <div className="sidebar-main">
          {/* Main button section */}
          <div className="sidebar-section">
            <SidebarItem link='home' span='Home' icon='home' />
            <SidebarItem link='trending' span='Trending' icon='whatshot' />
            <SidebarItem link='subscriptions' span='Subscriptions' icon='subscriptions' />
          </div>

          {/* Library button section */}
          <div className="sidebar-section">
            <div className="sidebar-header">
              <Link to=''>LIBRARY</Link>
            </div>

            <SidebarItem link='history' span='History' icon='history' />
            <SidebarItem link='' span='Watch Later' icon='watch_later' />

            { this.renderUserPlaylists() }

            <div className='sidebar-item'>
              <a onClick={this.togglePlaylists.bind(this)}>
                <i className="material-icons">{this.state.icon}</i>
                <span>{this.state.buttonVal}</span>
              </a>
            </div>

          </div>

          <SubscriptionSection subscriptions={this.props.subscriptions} />

          <ContributorSection />

           <div className="sidebar-section">
              <div className='sidebar-header'>
                This app is a collaborative effort from all of the contributors. We hope you enjoy using it.
              </div>
            </div>
        </div>


      </div>
    );
  }
}

Sidebar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  subscriptions: propChecker.subscriptions(),
  setting: PropTypes.shape({
    windowWidth: PropTypes.number,
    sidebarVisible: PropTypes.bool
  })
};

export default withRouter(Sidebar);
