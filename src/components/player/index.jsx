import React from 'react';
import { withRouter } from 'react-router';
import Player from './player';
import Details from './details';
import Related from './related';
import Comments from './comments';


class VideoDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player-container">
        <div className="left-frame">
          <Player videoId={this.props.router.params.videoId}/>
          <Details videoId={this.props.router.params.videoId}/>
          <Comments videoId={this.props.router.params.videoId}/>
        </div>
        <div className="right-frame">
          <Related videoId={this.props.router.params.videoId}/>
        </div>
      </div>
    );
  }

}

export default withRouter(VideoDetail);
