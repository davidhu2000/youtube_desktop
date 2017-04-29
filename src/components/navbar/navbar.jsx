import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import { SearchBar } from '../common';
import DropdownMenu from './dropdown_menu';
import { authenticateUser } from 'util/oauth_util';
import { toggleSidebar } from 'helpers';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  renderRightMenu() {
    if(this.props.loggedIn) {
      return (
        <div className='navbar-right-menu'>
          <a onClick={this.toggleDropdown.bind(this)} style={{cursor: 'pointer'}}>
            <img className='navbar-user-picture' src={this.props.user.picture} />
          </a>
          { this.state.showDropdown ? <DropdownMenu
            context={this}
            toggleDropdown={this.toggleDropdown.bind(this)}
            user={this.props.user}
            logout={this.props.logout}/> : null }
        </div>
      );
    } else {
      return (
        <div className='navbar-right-menu'>

          <a onClick={this.props.loginUser} style={{cursor: 'pointer'}}>
            <p className="sign-in-text">SIGN IN</p>
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-left-menu'>
          <i onClick={toggleSidebar} id="sidebar-menu" className="material-icons">menu</i>
          <i onClick={toggleSidebar} id="sidebar-carrot" className="material-icons hidden">keyboard_arrow_down</i>
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
