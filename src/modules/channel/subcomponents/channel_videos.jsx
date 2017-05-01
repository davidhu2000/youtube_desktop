import React from 'react';
import { Link } from 'react-router';
import { formatNumber, parseDuration, shortenString, timeFromNow } from 'helpers';

class ChannelVideos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    let channelVideos = this.props.videos;
    let videos = [];

    if (this.props.videos) {
      Object.keys(channelVideos).map(video => {
        videos.push(channelVideos[video])
      });
    }

    this.setState({ videos });
  }

  latestUpload() {
    let vid = this.state.videos[0];

    if (vid) {
      const { channelId, channelTitle, publishedAt } = vid.snippet;
      const { url } = vid.snippet.thumbnails.medium;
      const title = shortenString(vid.snippet.title, 60);

      let viewCount = '------';
      if (vid.statistics) {
        viewCount = vid.statistics.viewCount;
      }
      viewCount = viewCount || '------';

      let videoId;
      if (typeof vid.id === 'string') {
        videoId = vid.id;
      } else {
        videoId = vid.id.videoId;
      }

      if (vid.contentDetails && vid.contentDetails.upload) {
        videoId = vid.contentDetails.upload.videoId;
      }

      let duration;
      if(vid.contentDetails && vid.contentDetails.duration) {
        duration = vid.contentDetails.duration;
        duration = parseDuration(duration);
      }

      return (
        <div className="latest-uploaded-video">
          <Link to={`watch/${videoId}`} className="video-box-item-image">
            <img src={url} />
            <span className='duration-span'>{ duration }</span>
          </Link>

          <Link to={`watch/${videoId}`} className="video-box-item-title">
            <h1 className='video-title'>{title}</h1>
          </Link>

          <Link to={`channels/${channelId}`} className='video-box-item-channel'>
            <p className='basic-text'>{channelTitle}</p>
          </Link>

          <div className="video-box-item-info">
            <span>{ formatNumber(viewCount) } views</span>
            <span className='video-box-item-date'>{ timeFromNow(publishedAt) } </span>
          </div>
        </div>
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="channel-videos-container">
        {this.latestUpload()}
      </div>
    );
  }
}

export { ChannelVideos };
