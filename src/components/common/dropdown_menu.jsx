import React from 'react';

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
        <div className='arrow'></div>
        <div className='gray-bar'>
          <h1><strong>{ user.email }</strong></h1>
        </div>
        <div className='user-info'>
          <img src={user.picture} />
          <div>
            <h1><strong>{ user.name }</strong></h1>
            <div className='page-numbers'>
              <button onClick={this.clearUser.bind(this)}>
                Logout
              </button>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export { DropdownMenu };
