import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

import { SearchBar } from '../common';

import { receiveQuery } from '../../actions/query_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('hidden');

  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-left-menu'>
          <i onClick={this.toggleSidebar} className="material-icons">menu</i>
            <img className='youtube-logo' src="./app/assets/Youtube-logo.png"/>
        </div>


        <div className='navbar-center-menu'>
          <SearchBar
            receiveQuery={ this.props.receiveQuery }
            router={ this.props.router } />
        </div>

        <div className='navbar-right-menu'>
          <i className="material-icons">file_upload</i>
          <img className='beads-image' src="./app/assets/ic_more_vert_black_24px.svg"/>
          <Link to='/login-email'>
            <p className="sign-in-text">SIGN IN</p>
          </Link>
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
