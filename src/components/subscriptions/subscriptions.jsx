import React          from 'react';
import { withRouter } from 'react-router';
import { VideoList }  from '../common';

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubscriptions().then(
      () => {
        Object.keys(this.props.subscriptions).forEach( id => {
          this.props.fetchSubscriptionUploads(id)
        });
      }
    );
  }

  render() {
    let subs = this.props.subscriptions;
    let keys = Object.keys(subs);
    if(keys.length > 0 && subs[keys[keys.length - 1]].videos) {
      let videos = [];
      let subs = this.props.subscriptions;
      Object.keys(subs).forEach( id => {
        videos.push(...subs[id].videos);
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
        <div>Loading</div>
      );
    }

  }
}

export default withRouter(Subscriptions);
