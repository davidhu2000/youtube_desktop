/* global localStorage */
import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import { Link } from 'react-router';
import autoBind from 'react-autobind';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleClickOutside(e) {
    let notNavbarButton = !e.target.classList.contains('navbar-user-picture');
    if (notNavbarButton) {
      this.props.toggleDropdown('dropDown');
    }
  }

  clearUser() {
    this.props.logout();
    this.props.toggleDropdown('dropDown');
    localStorage.removeItem('google-user');
  }

  render() {
    const { user } = this.props;
    const myChannelId = user.channelId;

    return (
      <div id='dropdown-menu' className='dropdown-menu'>
        <div className='user-info'>
          <img src={user.picture} alt={`${user.name}`} />
          <h1><strong>{ user.name }</strong></h1>
        </div>

        <div>
          <div className='button-list'>
            <Link to={`channels/${myChannelId}`}>
              My Channel
            </Link>
            <button onClick={this.clearUser}>
              Sign Out
            </button>
          </div>
        </div>

        <div className='button-list dropdown-options'>
          <button>Settings</button>
          <button>Help</button>
          <button>Send feedback</button>
        </div>

      </div>
    );
  }
}

DropdownMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
  toggleDropdown: PropTypes.func.isRequired
};

export default enhanceWithClickOutside(DropdownMenu);
