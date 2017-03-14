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
        </div>

        <div className='navbar-center-menu'>
          <SearchBar
            receiveQuery={ this.props.receiveQuery }
            router={ this.props.router } />
        </div>

        <div className='navbar-right-menu'>
          <i className="material-icons">file_upload</i>
          <i className="material-icons">notifications_none</i>
          <Link to='/login'>
            <i className="material-icons">person</i>
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
