import React                from 'react';
import { withRouter, Link } from 'react-router';

import { SearchBar }        from '../common';
import { authenticateUser } from '../../util/oauth_util';
import { toggleTheme }      from '../../helpers';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar() {
    let sidebar       = document.getElementById("sidebar");
    let sidebarcarrot =  document.getElementById("sidebar-carrot");
    let sidebarmenu   = document.getElementById("sidebar-menu");
    let logo          = document.getElementById("sidebar-logo");
    let burger        = document.getElementById("burger");

    burger.classList.toggle('grey_shift');
    logo.classList.toggle('grey_shift');
    sidebar.classList.toggle('hidden');
    sidebarcarrot.classList.toggle('hidden');
    sidebarmenu.classList.toggle('hidden');
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-left-menu'>
          <i onClick={this.toggleSidebar} id="sidebar-menu" className="material-icons">menu</i>
          <i onClick={this.toggleSidebar} id="sidebar-carrot" className="material-icons hidden">keyboard_arrow_down</i>
          <img className='burger' id="burger" src="./app/assets/burger.png"/>
          <img className='youtube-logo' id="sidebar-logo" src="./app/assets/Youtube-logo.png"/>
        </div>

        <div className='navbar-center-menu'>
          <SearchBar
            receiveQuery={ this.props.receiveQuery }
            router={ this.props.router } />
        </div>

        <div className='navbar-right-menu'>
          <i className="material-icons">file_upload</i>
          <button onClick={toggleTheme}>
            <img className='beads-image' src="./app/assets/ic_more_vert_black_24px.svg"/>
          </button>
          <a onClick={authenticateUser} style={{cursor: 'pointer'}}>
            <p className="sign-in-text">SIGN IN</p>
          </a>

        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
