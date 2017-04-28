import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router';

import { fetchSubscriptions } from 'actions/youtube_video_actions';
import { receiveSetting } from 'actions/setting_actions';
import { propChecker, toggleSidebar } from 'helpers';

import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import { ProgressBar } from './common';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      progress: 0,
      addition: 0.5,
      pathname: 'home'
    };
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

    this.props.setState({ pathname: this.props.pathname.pathname });

    if(this.props.location.pathname === '/search' && !this.props.searchResult.video) {
      this.props.router.replace('/home');
    }

    if(this.props.loggedIn) {
      this.props.fetchSubscriptions(this.props.channelId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.state.pathname !== newProps.location.pathname) {

      console.log('app')
      this.props.receiveSetting({ isLoading: true });
      this.setState({ 
        progress: 0,
        addition: 0.5,
        pathname: newProps.location.pathname
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSetting.bind(this));
    window.removeEventListener('click', this.updateSetting.bind(this));
  }

  updateProgress() {
    let addition;
    if (this.state.progress < 30) {
      addition = 0.5;
    } else if (this.state.progress < 40) {
      addition = 0.25;
    } else if (this.state.progress < 50) {
      addition = 0.1;
    } else {
      addition = 0.001;
    }

    this.setState({
      progress: this.state.progress + this.state.addition,
      addition
    });
  }

  renderProgressBar() {
    let isLoading = this.props.setting.isLoading;
    if (isLoading) {
      return (
        <ProgressBar 
          isLoading={isLoading} 
          progress={this.state.progress} 
          updateProgress={this.updateProgress.bind(this)} />
      );
    }
  }

  render() {
    return(
      <div className="relative-content">
        { this.renderProgressBar() }
        <Navbar />
        <Sidebar />
        { this.props.children }
        <Footer />
        <div id='sidebar-cover' className='hidden' onClick={toggleSidebar}></div>
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
  loggedIn: Boolean(state.user),
  channelId: state.user ? state.user.channelId : null
});

const mapDispatchToProps = dispatch => ({
  receiveSetting: setting => dispatch(receiveSetting(setting)),
  fetchSubscriptions: channelId => dispatch(fetchSubscriptions(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
