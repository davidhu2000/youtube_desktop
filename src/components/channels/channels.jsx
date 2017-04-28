import React from 'react';
import ChannelNavbar from './channel_navbar';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="main-content">
        <div className="channels-container">
          <div className="channel-banner-container">
            <img id="channel-banner"
                 src="./app/assets/whiteburger.png" />
          </div>
          <div className="channel-banner-header">

          </div>
          <ChannelNavbar />
        </div>
      </div>
    )
  }
}

export default Channel;
