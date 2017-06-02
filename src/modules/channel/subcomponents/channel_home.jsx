import React from 'react';
import PropTypes from 'prop-types';
import { values } from 'lodash';
import { propChecker } from 'helpers';
import { VideoBox, VideoList } from 'common/components';

class ChannelHome extends React.Component {

  renderPlaylists() {
    function notPrivateVideo(vid) {
      return vid.snippet.title !== 'Private video';
    }

    return values(this.props.playlists).map(playlist => {
      let vids = playlist.items.filter(notPrivateVideo);

      return (
        <VideoBox
          key={playlist.id}
          title={playlist.snippet.title}
          vids={vids}
          maxNumber={vids.length}
          windowWidth={this.props.setting.windowWidth}
          sidebarVisible={this.props.setting.sidebarVisible}
          widthDeduction={120}
        />
      );
    });
  }

  render() {
    return (
      <div className="channel-home">
        <div style={{ marginLeft: 120, marginTop: 10 }}>
          <VideoList
            shouldShowVolume={false}
            windowWidth={this.props.setting.windowWidth - 120}
            videos={this.props.videos.slice(0, 1)}
            shouldShowSpinner={false}
          />
        </div>

        <div className="channel-playlists">
          { this.renderPlaylists() }
        </div>
      </div>
    );
  }
}

ChannelHome.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape()),
  playlists: PropTypes.shape(),
  setting: propChecker.setting().isRequired
};

ChannelHome.defaultProps = {
  videos: [],
  playlists: {}
};

export { ChannelHome };
