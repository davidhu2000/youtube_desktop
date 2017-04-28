import React from 'react';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log(this.props);

    return (
      <div>
        Hello Channels!
      </div>
    )
  }
}

export default Channel;
