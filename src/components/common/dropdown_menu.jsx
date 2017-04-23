import React from 'react';
import PropTypes from 'prop-types';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  clearUser() {
    this.props.logout();
    localStorage.removeItem('google-user');
  }

  render() {
    const { user } = this.props;
    return (
      <div id='dropdown-menu' className='hidden'>
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

export { DropdownMenu };
