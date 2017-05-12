import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import { SearchBar } from 'common/components';
import { toggleSidebar } from 'helpers';
import DropdownMenu from './dropdown_menu';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  renderRightMenu() {
    if (this.props.loggedIn) {
      return (
        <div className='navbar-right-menu'>
          <a onClick={this.toggleDropdown} style={{ cursor: 'pointer' }} role="button">
            <img className='navbar-user-picture' src={this.props.user.picture} />
          </a>
          { this.state.showDropdown ? (
            <DropdownMenu
              context={this}
              toggleDropdown={this.toggleDropdown}
              user={this.props.user}
              logout={this.props.logout}
            />
            ) : null }
        </div>
      );
    } else {
      return (
        <div className='navbar-right-menu'>
          <a onClick={this.props.loginUser} role='button' style={{ cursor: 'pointer' }}>
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
          <i onClick={toggleSidebar} id="sidebar-menu" className="material-icons" role="button">
            menu
          </i>
          <Link to='/' className='youtube-logo' id="sidebar-logo">
            <img src="./app/assets/Youtube-logo.png" />
          </Link>
        </div>

        <div className='navbar-center-menu'>
          <SearchBar
            receiveQuery={this.props.receiveQuery}
            router={this.props.router}
          />
        </div>

        { this.renderRightMenu() }

      </div>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.shape(),
  loggedIn: PropTypes.bool.isRequired,
  receiveQuery: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  user: {}
};

export default withRouter(Navbar);
