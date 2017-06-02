import React from 'react';
import PropTypes from 'prop-types';
import { values } from 'lodash';
import { propChecker } from 'helpers';
import { VideoBox } from 'common/components';
import { FeaturedVideo } from './';

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
        <FeaturedVideo videos={this.props.videos} />
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
