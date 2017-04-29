import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, hashHistory } from 'react-router';
import { propChecker } from 'helpers';
import { VideoList } from '../common';

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  _redirect() {
    hashHistory.replace('/home');
  }

  getUploads(subs) {
    Object.keys(subs).forEach( id => {
      this.props.fetchSubscriptionUploads(id).then(
        () => this.setState({ count: this.state.count + 1 })
      );
    });
  }

  componentDidMount() {
    if(this.props.loggedIn) {
      this.getUploads(this.props.subscriptions);
    } else {
      this._redirect();
    }
  }

  componentWillReceiveProps(newProps) {
    if(!newProps.loggedIn) {
      this._redirect();
    } else {
      let oldNumSubs = Object.keys(this.props.subscriptions).length;
      let newNumSubs = Object.keys(newProps.subscriptions).length;
      if (oldNumSubs !== newNumSubs) {
        this.props.fetchSubscriptions().then(
          () => this.getUploads(newProps.subscriptions)
        );
      }
    }
  }

  render() {
    let subs = this.props.subscriptions || [];
    let keys = Object.keys(subs);
    
    // check to see if the number of times videos are fetches is equal to number of subs
    if(this.state.count === keys.length) {
      let videos = [];
      keys.forEach( key => {
        videos.push(...subs[key].videos);
      });

      videos = videos.sort( (v1, v2) => {
        let date1 = new Date(v1.snippet.publishedAt);
        let date2 = new Date(v2.snippet.publishedAt);
        return date2 - date1;
      });

      return (
        <div className='main-content'>
          <VideoList
            windowWidth={this.props.setting.windowWidth}
            shouldShowPageNumber={false}
            shouldShowVolume={false}
            videos={videos} />
        </div>
      );
    } else {
      return (
        <div className='main-content'>Loading</div>
      );
    }

  }
}

Subscriptions.propTypes = {
  fetchSubscriptions: PropTypes.func.isRequired,
  fetchSubscriptionUploads: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  subscriptions: propChecker.subscriptions(),
  setting: propChecker.setting()
};

export default withRouter(Subscriptions);
