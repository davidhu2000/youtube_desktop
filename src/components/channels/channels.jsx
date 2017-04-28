import React from 'react';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="channels-container">
        <div className="channel-banner-container">
          <img id="channel-banner" src="./app/assets/whiteburger.png" />
        </div>
      </div>
    )
  }
}

export default Channel;
