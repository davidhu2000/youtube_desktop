import React          from 'react';
import { withRouter } from 'react-router';
import Player         from './player';
import Details        from './details';
import Related        from './related';
import Comments       from './comments';


class VideoDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let videoId = this.props.router.params.videoId;
    return (
      <div className="player-container">
        <div className="left-frame">
          <Player   videoId={videoId}/>
          <Details  videoId={videoId}/>
          <Comments videoId={videoId}/>
        </div>
        <div className="right-frame">
          <Related  videoId={videoId}/>
        </div>
      </div>
    );
  }

}

export default withRouter(VideoDetail);
