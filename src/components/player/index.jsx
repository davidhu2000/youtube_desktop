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
        Player
        <Player/>
        <Details/>
        <Comments/>
        <Related/>
      </div>
    );
  }

}

export default withRouter(VideoDetail);
