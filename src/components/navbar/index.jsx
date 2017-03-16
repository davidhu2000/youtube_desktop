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
    sidebar.classList.toggle('hidden');
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
          <i onClick={this.toggleSidebar} className="material-icons">menu</i>
        </div>

        <div className='navbar-center-menu'>
          <SearchBar
            receiveQuery={ this.props.receiveQuery }
            router={ this.props.router } />
        </div>

        <div className='navbar-right-menu'>
          <i className="material-icons">file_upload</i>
          <i className="material-icons">notifications_none</i>
          <i className="material-icons" onClick={this.toggleAuthPage}>person</i>
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
