import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import { SearchBar, DropdownMenu } from '../common';
import { authenticateUser } from 'util/oauth_util';
import { toggleSidebar } from 'helpers';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRightMenu() {
    if(this.props.loggedIn) {
      return (
        <div className='navbar-right-menu'>
          <i className="material-icons">file_upload</i>
          <button>
            <img className='beads-image' src="./app/assets/ic_notifications_none_black_24px.svg"/>
          </button>
          <a onClick={this.toggleDropdown} style={{cursor: 'pointer'}}>
            <img src={this.props.user.picture} />
          </a>
          <DropdownMenu
            user={this.props.user}
            logout={this.props.logout}/>
        </div>
      );
    } else {
      return (
        <div className='navbar-right-menu'>
          <i className="material-icons">file_upload</i>
          <button>
            <img className='beads-image' src="./app/assets/ic_more_vert_black_24px.svg"/>
          </button>
          <a onClick={this.props.loginUser} style={{cursor: 'pointer'}}>
            <p className="sign-in-text">SIGN IN</p>
          </a>
        </div>
      );
    }
  }

  toggleDropdown() {
    document.getElementById('dropdown-menu').classList.toggle('hidden');
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-left-menu'>
          <i onClick={toggleSidebar} id="sidebar-menu" className="material-icons">menu</i>
          <i onClick={toggleSidebar} id="sidebar-carrot" className="material-icons hidden">keyboard_arrow_down</i>
          <Link to='/' className='burger' id="burger">
            <img src="./app/assets/burger.png"/>
          </Link>
          <Link to='/' className='youtube-logo' id="sidebar-logo">
            <img src="./app/assets/Youtube-logo.png"/>
          </Link>
        </div>

        <div className='navbar-center-menu'>
          <SearchBar
            receiveQuery={ this.props.receiveQuery }
            router={ this.props.router } />
        </div>

        { this.renderRightMenu() }

      </div>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object,
  loggedIn: PropTypes.bool,
  receiveQuery: PropTypes.func,
  loginUser: PropTypes.func,
  logout: PropTypes.func
};

export default withRouter(Navbar);
