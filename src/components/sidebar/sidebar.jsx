import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';
import { propChecker } from 'helpers';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sidebar" className='sidebar'>
        {/* Header section */}
        <div className='sidebar-section' id='sidebar-header'>
          <div className='sidebar-item'>

            <i className="material-icons">menu</i>
            <img className='youtube-logo' src="./app/assets/Youtube-logo.png" />
          </div>
        </div>

        {/* Main button section */}
        <div className="sidebar-section">
          <div className="sidebar-item">
            <Link to='/home'>
              <i className='material-icons'>home</i>
              <span>Home</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to='/trending'>
              <i className='material-icons'>whatshot</i>
              <span>Trending</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to='/subscriptions'>
              <i className='material-icons'>subscriptions</i>
              <span>Subscriptions</span>
            </Link>
          </div>
        </div>

        {/* Library button section */}
        <div className="sidebar-section">
          <div className="sidebar-header">
            <Link to=''>LIBRARY</Link>
          </div>
          <div className="sidebar-item">
            <Link to=''>
              <i className='material-icons'>history</i>
              <span>History</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to=''>
              <i className='material-icons redish'>watch_later</i>
              <span>Watch Later</span>
            </Link> 
          </div>
        </div>

        {/* Subscription buttons */}
        <div className="sidebar-section">
          <div className="sidebar-header">
            <Link to=''>SUBSCRIPTIONS</Link>
          </div>


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
