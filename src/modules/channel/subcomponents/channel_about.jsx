import React from 'react';
import PropTypes from 'prop-types';

class ChannelAbout extends React.Component {

  renderDescription() {
    console.log(this.props.description.split('\n'))
    return this.props.description.split('\n').map(line => {
      return <li>{ line }</li>
    });
  }

  render() {
    return (
      <div className='channel-about'>
        <div className="channel-about-left">
          <h1>Description</h1>
          <ul>{ this.renderDescription() }</ul>
        </div>

        <div className="channel-about-right">
          <h1>Stats</h1>
          { this.props.viewCount }
        </div>
      </div>
    );
  }
}

ChannelAbout.propTypes = {
  description: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired
};

export { ChannelAbout };