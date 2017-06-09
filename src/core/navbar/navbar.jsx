import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { toggleSidebar } from 'helpers';
import { SearchBar } from 'common/components';

import DropdownMenu from './dropdown_menu';
import BugForm from './bug_form';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false,
      bugForm: false
    };

    autoBind(this);
  }

  toggleDropdown(type) {
    this.setState({ [type]: !this.state[type] });
  }

  renderRightMenu() {
    if (this.props.loggedIn) {
      return (
        <div className='navbar-right-menu'>
          <i onClick={() => this.toggleDropdown('bugForm')} className="material-icons navbar-bug-icon">
            bug_report
          </i>
          <a onClick={() => this.toggleDropdown('dropDown')} style={{ cursor: 'pointer' }} role="presentation">
            <img
              className='navbar-user-picture'
              src={this.props.user.picture}
              alt={this.props.user.name}
            />
          </a>

          { this.state.dropDown ? (
            <DropdownMenu
              context={this}
              toggleDropdown={this.toggleDropdown}
              user={this.props.user}
              logout={this.props.logout}
            />
            ) : null }

          { this.state.bugForm ? (
            <BugForm
              context={this}
              toggleDropdown={this.toggleDropdown}
              location={this.props.location.pathname.slice(1)}
            />
            ) : null }
        </div>
      );
    } else {
      return (
        <div className='navbar-right-menu'>
          <i onClick={() => this.toggleDropdown('bugForm')} className="material-icons">
            bug_report
          </i>
          <a onClick={this.props.loginUser} role='presentation' style={{ cursor: 'pointer' }}>
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
          <i
            onClick={toggleSidebar}
            id="sidebar-menu"
            className="material-icons"
            role="presentation"
          >
            menu
          </i>
          <Link to='/' className='youtube-logo' id="sidebar-logo">
            <img src="./app/assets/Youtube-logo.png" alt="Youtube Logo" />
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
