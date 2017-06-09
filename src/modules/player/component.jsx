/* global Promise */
import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { propChecker } from 'helpers';

import {
  Player,
  Details,
  Related,
  Comments } from './subcomponents';

// TODO: ??
// function is used to render the video in a separate window,
// put on backlog for now.
// import videoWindow from '../../renderer/video_page';
// <button onClick={() => videoWindow(videoId).show()}>Pop Off</button>


  // >1300px large player, related on right
  // >1000px <1300px, medium player, related on right
  // >860px <1000px, large player, related on bottom
  // >660px <860px, medium player, related on bottom
  // <660px, small player, related on bottom

class PlayerDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: this.props.router.params.videoId,
      playerSize: 'medium',
      relatedPosition: 'left',
      small: { width: 426, height: 240 },
      medium: { width: 640, height: 360 },
      large: { width: 854, height: 480 }
    };
  }

  componentDidMount() {
    this.props.receiveSetting({ isLoading: true });
    this._getNewVideoInfo(this.state.videoId);
    this.updateHeight(this.props.setting.windowWidth);
  }

  componentWillReceiveProps(newProps) {
    let videoId = newProps.params.videoId;
    if (videoId !== this.state.videoId) {
      this.props.receiveSetting({ isLoading: true });
      this.setState({ videoId });
      this._getNewVideoInfo(videoId);
    }
    this.updateHeight(this.props.setting.windowWidth);
  }

  _getNewVideoInfo(videoId) {
    let dataNeeded = [];

    dataNeeded.push(this.props.fetchDetails(videoId));
    dataNeeded.push(this.props.fetchComments(videoId));
    dataNeeded.push(this.props.fetchRelated(videoId));

    if (this.props.loggedIn) {
      dataNeeded.push(this.props.fetchVideoRating(videoId));
    }

    Promise.all(dataNeeded).then(() => this.props.receiveSetting({ isLoading: false }));
  }

  updateHeight(width) {
    if (width > 1300) {
      this.setState({ playerSize: 'large', relatedPosition: 'left' });
    } else if (width > 1000) {
      this.setState({ playerSize: 'medium', relatedPosition: 'left' });
    } else if (width > 860) {
      this.setState({ playerSize: 'large', relatedPosition: 'bottom' });
    } else if (width > 660) {
      this.setState({ playerSize: 'medium', relatedPosition: 'bottom' });
    } else {
      this.setState({ playerSize: 'small', relatedPosition: 'bottom' });
    }
  }

  renderRightFrame() {
    if (this.state.relatedPosition === 'left') {
      return (
        <div className="right-frame">
          <Related
            related={this.props.playerDetails.related}
            autoplay={this.props.playerDetails.autoplay}
            switchAutoplay={this.props.switchAutoplay}
          />
        </div>
      );
    }
  }

  renderRelated() {
    if (this.state.relatedPosition === 'bottom') {
      return (
        <Related
          related={this.props.playerDetails.related}
          width={this.state[this.state.playerSize].width}
          autoplay={this.props.playerDetails.autoplay}
          switchAutoplay={this.props.switchAutoplay}
        />
      );
    }
  }

  render() {
    if (!this.props.setting.isLoading) {
      let videoId = this.props.router.params.videoId;
      let { comments, details, related, rating, autoplay } = this.props.playerDetails;
      let user = this.props.user;
      let { height, width } = this.state[this.state.playerSize];

      return (
        <div className="main-content">
          <div className="player-container">
            <div className="left-frame">

              <Player
                videoId={videoId}
                nextVideoId={related[0].id.videoId}
                autoplay={autoplay}
                height={height}
                width={width}
              />

              <Details
                details={details}
                rating={rating}
                width={width}
                videoId={videoId}
                subscriptions={this.props.subscriptions}
                videosRate={this.props.videosRate}
                insertSubscription={this.props.insertSubscription}
                deleteSubscription={this.props.deleteSubscription}
              />

              { this.renderRelated() }

              <Comments
                loggedIn={this.props.loggedIn}
                comments={comments}
                user={user}
                details={details}
                fetchComments={this.props.fetchComments}
              />

            </div>
            { this.renderRightFrame() }
          </div>
        </div>
      );
    } else {
      return <div />;
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
  switchAutoplay: PropTypes.func.isRequired,
  insertSubscription: PropTypes.func.isRequired,
  deleteSubscription: PropTypes.func.isRequired,
  playerDetails: propChecker.playerDetails().isRequired,
  setting: propChecker.setting().isRequired,
  user: PropTypes.shape(),
  loggedIn: PropTypes.bool.isRequired,
  subscriptions: PropTypes.shape()
};

PlayerDetails.defaultProps = {
  user: {},
  subscriptions: {}
};

export default withRouter(PlayerDetails);
