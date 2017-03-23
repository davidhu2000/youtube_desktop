import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { SearchBar, AuthPage } from '../common';

import { receiveQuery } from '../../actions/query_actions';
import { authenticateUser } from '../../util/oauth_util';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let sidebarcarrot =  document.getElementById("sidebar-carrot");
    let sidebarmenu = document.getElementById("sidebar-menu");
    let logo = document.getElementById("sidebar-logo");

    logo.classList.toggle('grey_shift');
    sidebar.classList.toggle('hidden');
    sidebarcarrot.classList.toggle('hidden');
    sidebarmenu.classList.toggle('hidden');
  }

  toggleAuthPage() {
    // let authPage = document.getElementById('authPage');
    // authPage.classList.toggle('hidden');
    // window.child.loadURL(authenticateUser())
    // window.child.show();
    authenticateUser();
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-left-menu'>
          <i onClick={this.toggleSidebar} id="sidebar-menu" className="material-icons">menu</i>
          <i onClick={this.toggleSidebar} id="sidebar-carrot" className="material-icons hidden">keyboard_arrow_down</i>
          <img className='youtube-logo' id="sidebar-logo" src="./app/assets/Youtube-logo.png"/>
        </div>

        <div className='navbar-center-menu'>
          <SearchBar
            receiveQuery={ this.props.receiveQuery }
            router={ this.props.router } />
        </div>

        <div className='navbar-right-menu'>
          <i className="material-icons">file_upload</i>
          <img className='beads-image' src="./app/assets/ic_more_vert_black_24px.svg"/>
          <a onClick={authenticateUser} style={{cursor: 'pointer'}}>
            <p className="sign-in-text">SIGN IN</p>
          </a>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
