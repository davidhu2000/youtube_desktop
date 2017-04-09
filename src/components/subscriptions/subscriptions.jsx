import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import { VideoList } from '../common';

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  _redirect() {
    hashHistory.replace('/home');
  }

  componentDidMount() {
    if(this.props.loggedIn) {
      this.props.fetchSubscriptions().then(
        () => {
          Object.keys(this.props.subscriptions).forEach( id => {
            this.props.fetchSubscriptionUploads(id).then(
              () => this.setState({ count: this.state.count + 1 })
            );
          });
        }
      );
    } else {
      this._redirect();
    }
  }

  componentWillReceiveProps(newProps) {
    if(!newProps.loggedIn) {
      this._redirect();
    }
  }

  render() {
    let subs = this.props.subscriptions || [];
    let keys = Object.keys(subs);
    if(this.state.count == keys.length) {
      let videos = [];
      keys.forEach( key => {
        videos.push(...subs[key].videos);
      });

      videos = videos.sort( (v1, v2) => {
        let date1 = new Date(v1.snippet.publishedAt)
        let date2 = new Date(v2.snippet.publishedAt)
        return date2 - date1;
      });

      return (
        <div>
          <VideoList
            shouldShowPageNumber={false}
            shouldShowVolume={false}
            videos={videos} />
        </div>
      );
    } else {
      return (
        <div className='search-index'>Loading</div>
      );
    }

  }
}

export default withRouter(Subscriptions);
