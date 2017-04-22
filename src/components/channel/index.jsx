import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);
    return (
      <div className='channel'>
        <div className="banner-container">
          <img id="banner" src="./app/assets/banner1.jpg"/>
        </div>
        <div className="channel-banner">
          <div className="channel-banner-left">
            <img id="channel-profile" src="./app/assets/sample_channel_profile.png"/>
            <div id="channel-details">
              <span id="channel-owner-name">Raymond Lee</span>
              <span id="channel-owner-subscribers">1,086,814 subscribers</span>
            </div>
          </div>
          <div className="channel-banner-right">
            <div id="subscribe-button"><span>SUBSCRIBED</span> <span id="subscribed-num">1M</span></div>
          </div>
        </div>
        <div id="banner-bar"></div>
        <div id="channel-navbar">
          <ul>
            <li>Home</li>
            <li>Videos</li>
            <li>Playlists</li>
            <li>Channels</li>
            <li>Discussion</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <div>Main Video</div>
          <div>Main Video Description</div>
        </div>
        <div>
          Sliders of videos
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Channel));
