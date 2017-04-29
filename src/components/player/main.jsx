/* global Promise */
import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { propChecker } from 'helpers';

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

    this.state = {
      videoId: this.props.router.params.videoId
    };
  }

  _getNewVideoInfo() {
    let dataNeeded = [];
  
    dataNeeded.push(this.props.fetchDetails(this.state.videoId));
    dataNeeded.push(this.props.fetchComments(this.state.videoId));
    dataNeeded.push(this.props.fetchRelated(this.state.videoId));
    dataNeeded.push(this.props.fetchVideoRating(this.state.videoId));

    Promise.all(dataNeeded).then( res => this.props.receiveSetting({ isLoading: false }));
  }

  componentDidMount() {
    this.props.receiveSetting({ isLoading: true });
    this._getNewVideoInfo();
  }

  componentWillReceiveProps(newProps) {
    let videoId = newProps.params.videoId;
    if (videoId !== this.state.videoId) {
      this.props.receiveSetting({ isLoading: true });
      this.setState({ videoId });
      this._getNewVideoInfo();
    }
  }

  render() {
    if (!this.props.setting.isLoading) {
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
    } else {
      return <div></div>;
    }
    
  }
}

PlayerDetails.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  fetchRelated: PropTypes.func.isRequired,
  fetchDetails: PropTypes.func.isRequired,
  fetchVideoRating: PropTypes.func.isRequired,
  videosRate: PropTypes.func.isRequired,
  receiveSetting: PropTypes.func.isRequired,
  playerDetails: propChecker.playerDetails(),
  setting: propChecker.setting()
};

export default withRouter(PlayerDetails);
