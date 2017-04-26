import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import { SearchBar, DropdownMenu } from '../common';
import { authenticateUser } from 'util/oauth_util';
import { toggleSidebar } from 'helpers';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  renderRightMenu() {
    if(this.props.loggedIn) {
      return (
        <div className='navbar-right-menu'>
          <i className="material-icons">file_upload</i>
          <button>
            <img className='beads-image' src="./app/assets/ic_notifications_none_black_24px.svg"/>
          </button>
          <a onClick={this.toggleDropdown.bind(this)} style={{cursor: 'pointer'}}>
            <img className='navbar-user-picture' src={this.props.user.picture} />
          </a>
          { this.state.showDropdown ? <DropdownMenu
            context={this}
            user={this.props.user}
            logout={this.props.logout}/> : null }
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
    this.setState({ showDropdown: !this.state.showDropdown });
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
