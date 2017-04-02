import React from 'react';
import { CategoryBox } from '../common';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrending();
  }

  render() {
    if(this.props.trending[0]) {
       return (
         <div className='search-index'>
           <CategoryBox title='Trending' vids={this.props.trending}/>
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
