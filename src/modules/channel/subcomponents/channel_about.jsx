/* global window, document */
import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber, parseStringForLinks } from 'helpers';

const { ipcRenderer } = window.require('electron');

class ChannelAbout extends React.Component {
  componentDidMount() {
    let container = document.getElementsByClassName('channel-about-left')[0];
    container.onclick = event => {
      if (event.target.tagName === 'A') {
        let url = event.target.innerHTML;
        ipcRenderer.send('open-url', url);
      }
    };
  }

  componentWillUnMount() {
    let container = document.getElementsByClassName('channel-about-left')[0];
    container.onclick = null;
  }

  renderDescription() {
    return this.props.description.split('\n').map(line => (
      <li
        key={Math.random()}
        dangerouslySetInnerHTML={{ __html: `${parseStringForLinks(line || '\n')}` }}
      />
    ));
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
          <span>Joined</span>
          <span>{ formatNumber(this.props.viewCount) } views</span>
        </div>
      </div>
    );
  }
}

ChannelAbout.propTypes = {
  description: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired
};

export { ChannelAbout };
