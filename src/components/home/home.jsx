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
    let vid = this.props.searchResult[1];
    console.log(vid);

    if(this.props.searchResult[0]) {
       return (
         <div className='search-index'>
           <CategoryBox vid={vid}/>
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
