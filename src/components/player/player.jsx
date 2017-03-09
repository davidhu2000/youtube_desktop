import React from 'react';
import { withRouter } from 'react-router';
import Video from './video';
import Details from './details';
import Related from './related';
import Comments from './comments';


class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player-container">
        Player
        <Video/>
        <Details/>
        <Comments/>
        <Related/>
      </div>
    );
  }

}

export default Player;
