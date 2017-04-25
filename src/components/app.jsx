import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router';

import { fetchSubscriptions } from 'actions/youtube_video_actions';
import { receiveSetting } from 'actions/setting_actions';
import { propChecker } from 'helpers';

import Navbar  from './navbar';
import Sidebar from './sidebar';
import Footer  from './footer';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  updateSetting() {
    let windowWidth = window.innerWidth;
    let sidebar = document.getElementById('sidebar');
    let sidebarVisible = sidebar.classList.contains('ondocument') || sidebar.classList.contains('onscreen');

    this.props.receiveSetting({ windowWidth, sidebarVisible });
  }

  componentDidMount() {
    this.updateSetting();
    window.addEventListener('resize', this.updateSetting.bind(this));
    window.addEventListener('click', this.updateSetting.bind(this));

    if(this.props.location.pathname === '/search' && !this.props.searchResult.video) {
      this.props.router.replace('/home');
    }

    if(this.props.loggedIn) {
      this.props.fetchSubscriptions();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSetting.bind(this));
  }

  render() {
    return(
      <div className="relative-content">
        <Navbar />
        <Sidebar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}



App.propTypes = {
  setting: propChecker.setting(),
  searchResult: propChecker.searchResult(),
  loggedIn: PropTypes.bool,
  receiveSetting: PropTypes.func,
  fetchSubscriptions: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  setting: state.setting,
  searchResult: state.searchResult,
  loggedIn: Boolean(state.user)
});

const mapDispatchToProps = dispatch => ({
  receiveSetting: setting => dispatch(receiveSetting(setting)),
  fetchSubscriptions: () => dispatch(fetchSubscriptions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
