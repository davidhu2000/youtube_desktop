import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='channel'>
        <div className="banner-container">
          <img id="banner" src="./app/assets/banner1.png"/>
        </div>
        <div className="channel-banner">
          <div className="channel-banner-left">
            <img id="channel-profile" src="./app/assets/banner.png"/>
            <div id="channel-details">
              <span>NAME</span>
              <span>SUBSCRIBERS</span>
            </div>
          </div>
          <div className="channel-banner-right">
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div id="banner-bar"></div>
        <div id="channel-navbar">
          <ul>
            <li>HOME</li>
            <li>VIDEOS</li>
            <li>PLAYLISTS</li>
            <li>CHANNELS</li>
            <li>DISCUSSION</li>
            <li>ABOUT</li>
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
