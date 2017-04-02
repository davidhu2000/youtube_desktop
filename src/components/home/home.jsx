import React from 'react';
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
  }

  render() {
    if(this.props.trendingVideos) {
       return (
         <div className='search-index'>
           <CategoryBox title='Trending' vids={this.props.trendingVideos}/>
         </div>
       );
    } else {
      return (
        <div className='search-index'></div>
      )
    }

  }
}

export default Home;
