import React           from 'react';
import { CategoryBox } from '../common';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let ms = 24 * 3600 * 1000;
    if(Date.now() - this.props.date > ms || !this.props.trendingVideos) {
      this.props.fetchTrending();
    }

    let channelIds = [
      'UC-9-kyTW8ZkZNDHQJ6FgpwQ',
      'UCEgdi0XIXXZ-qJOFPf4JSKw',
      'UCOpNcN46UbXVtpKMrmU4Abg',
      'UClgRkhTL3_hImCAmdLfDE4g',
      'UCYfdidRxbB8Qhf0Nx7ioOYw',
      'UCBR8-60-B28hp2BmDPdntcQ',
    ];

    for(let i = 0; i < channelIds.length; i++) {
      const id = channelIds[i];
      this.props.fetchChannelVideos(id);
    }
  }

  renderChannels() {
    let channels = this.props.channels;

    let ids = Object.keys(channels);
    if(ids[0]) {
      return ids.map( id => {
        let channel = channels[id];
        let title = channel.videos[0].snippet.channelTitle;
        return <CategoryBox key={Math.random()} title={title} vids={channel.videos} />
      });
    }
  }

  render() {
    if(this.props.trendingVideos) {
       return (
         <div className='home-page'>
           <CategoryBox title='Trending' vids={this.props.trendingVideos}/>
           {this.renderChannels()}
         </div>
       );
    } else {
      return (
        <div className='home-page'></div>
      )
    }

  }
}

export default Home;
