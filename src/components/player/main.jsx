import React          from 'react';
import { withRouter } from 'react-router';
import Player         from './player';
import Details        from './details';
import Related        from './related';
import Comments       from './comments';

// function ise used to render the video in a separate window,
// put on backlog for now.
// import videoWindow from '../../renderer/video_page';
// <button onClick={() => videoWindow(videoId).show()}>Pop Off</button>

class PlayerDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let videoId = this.props.router.params.videoId;
    this.props.fetchDetails(videoId);
    this.props.fetchComments(videoId);
    this.props.fetchRelated(videoId);
    this.props.fetchVideoRating(videoId);
  }

  render() {
    let videoId = this.props.router.params.videoId;
    let { comments, details, related, rating } = this.props.playerDetails;

    return (
      <div className="main-content"> 
        <div className="player-container">
          <div className="left-frame">
            <Player   videoId={videoId}/>
            <Details  details={details} rating={rating} videoId={videoId} videosRate={this.props.videosRate}/>
            <Comments comments={comments}/>
          </div>
          <div className="right-frame">
            <Related  related={this.props.playerDetails.related}/>
          </div>
        </div>
      </div>    
    );
  }
}

export default withRouter(PlayerDetails);
