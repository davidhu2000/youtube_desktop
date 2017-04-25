import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';
import { propChecker, toggleSidebar } from 'helpers';
import { values } from 'lodash';
import SidebarItem from './sidebar_item';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let sidebar = document.getElementById('sidebar');
    let cover = document.getElementById('sidebar-cover');
    cover.classList.add('hidden');

    if (window.innerWidth > 1312) {
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

    if (this.props.setting.windowWidth > 1312 && newProps.setting.windowWidth <= 1312) {
      sidebar.classList.remove('absolute', 'ondocument', 'hidden');
      sidebar.classList.add('fixed', 'offscreen');
      cover.classList.add('hidden');
    } else if (this.props.setting.windowWidth <= 1312 && newProps.setting.windowWidth > 1312) {
      sidebar.classList.remove('fixed', 'onscreen', 'offscreen');
      sidebar.classList.add('absolute', 'ondocument');
      cover.classList.add('hidden');
    }
  }

  handleClick(e) {
    let wideWindow = window.innerWidth < 1312;
    let correctClassName = e.target.className;
    let correctTags = ['I', 'SPAN', 'IMG', 'A'].includes(e.target.tagName);

    if (wideWindow && (correctClassName || correctTags)) {
      toggleSidebar();
    }  
  }

  renderSubscriptions() {
    let subs = values(this.props.subscriptions);
    return subs.map( sub => (
      <SidebarItem 
        key={Math.random()}
        link='#' 
        span={sub.title} 
        useImage={true} 
        url={sub.thumbnails.default.url} />
    ));
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
          <SidebarItem link='#' span='Watch Later' icon='watch_later' />
        </div>

        {/* Subscription buttons */}
        <div className="sidebar-section">
          <div className="sidebar-header">
            <Link to=''>SUBSCRIPTIONS</Link>
          </div>
          { this.renderSubscriptions() }
        </div>

      </div>
    );
  }
}

Sidebar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  subscriptions: propChecker.subscriptions()
};

export default withRouter(Sidebar);
