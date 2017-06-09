/* global window, document */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import autoBind from 'react-autobind';

import { fetchSubscriptions } from 'modules/subscriptions/actions';
import { receiveSetting } from 'common/setting/actions';
import { ProgressBar } from 'common/components';
import { propChecker, toggleSidebar } from 'helpers';

import Navbar from './navbar';
import Sidebar from './sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      addition: 0.5,
      pathname: this.props.location.pathname
    };

    autoBind(this);
  }

  componentDidMount() {
    this.updateSetting();
    window.addEventListener('resize', this.updateSetting.bind(this));
    window.addEventListener('click', this.updateSetting.bind(this));

    if (this.props.location.pathname === '/search' && !this.props.searchResult.video) {
      this.props.router.replace('/home');
    }

    if (this.props.loggedIn) {
      this.props.fetchSubscriptions(this.props.channelId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.state && this.state.pathname !== newProps.location.pathname) {
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

  updateSetting() {
    let windowWidth = window.innerWidth;
    let sidebar = document.getElementById('sidebar');
    let sidebarVisible = sidebar.classList.contains('ondocument') || sidebar.classList.contains('onscreen');

    this.props.receiveSetting({ windowWidth, sidebarVisible });
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

    let isLoading = this.props.setting.isLoading;
    if (!isLoading) {
      addition = 5;
    }

    this.setState({
      progress: this.state.progress + this.state.addition,
      addition
    });
  }

  renderProgressBar() {
    let isLoading = this.props.setting.isLoading;

    if (isLoading || (!isLoading && this.state.progress < 100 && this.state.progress > 0)) {
      return (
        <ProgressBar
          isLoading={isLoading}
          progress={this.state.progress}
          updateProgress={this.updateProgress}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div className="relative-content">
        {this.renderProgressBar()}
        <Navbar />
        <Sidebar />
        {this.props.children}
        <div id='sidebar-cover' className='hidden' onClick={toggleSidebar} />
      </div>
    );
  }
}

App.propTypes = {
  setting: propChecker.setting().isRequired,
  searchResult: propChecker.searchResult().isRequired,
  loggedIn: PropTypes.bool.isRequired,
  receiveSetting: PropTypes.func.isRequired,
  fetchSubscriptions: PropTypes.func.isRequired,
  channelId: PropTypes.string
};

App.defaultProps = {
  channelId: null
};

const mapStateToProps = ({ setting, searchResult, user }) => ({
  setting,
  searchResult,
  loggedIn: Boolean(user),
  channelId: user ? user.channelId : null
});

const mapDispatchToProps = dispatch => ({
  receiveSetting: setting => dispatch(receiveSetting(setting)),
  fetchSubscriptions: channelId => dispatch(fetchSubscriptions(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
