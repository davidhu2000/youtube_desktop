import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOutside(e) {
    let notNavbarButton = !e.target.classList.contains('navbar-user-picture');
    if(notNavbarButton) {
      this.props.toggleDropdown();
    }
  }

  clearUser() {
    this.props.logout();
    this.props.toggleDropdown();
    localStorage.removeItem('google-user');
  }

  render() {
    const { user } = this.props;
    return (
      <div id='dropdown-menu'>
        <div className='user-info'>
          <img src={user.picture} />
          <h1><strong>{ user.name }</strong></h1>
        </div>

        <div>    
          <div className='button-list'>
            <button onClick={() => {}}>
              My channel
            </button>
            <button onClick={this.clearUser.bind(this)}>
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
  logout: PropTypes.func,
  user: PropTypes.object
};

export default enhanceWithClickOutside(DropdownMenu);
