import React          from 'react';
import { withRouter } from 'react-router';
import Player from '../components/player';

export default () => {
  React.render(
    <Player />,
    document.getElementById('main-window')
  )
}
