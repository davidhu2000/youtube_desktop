import React from 'react';
import Slider from 'react-slick';
import { CategoryBoxItem } from './category_box_item';

class CategoryBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 0
    }
    console.log(this.state);
  }

  renderVideos() {
    return this.props.vids.slice(0, this.state.endIndex).map( vid => (
      <CategoryBoxItem
        key={vid.etag}
        vid={vid} />
    ));
  }

  componentDidMount() {
    this.numberVideosToShow();
    window.onresize = this.numberVideosToShow.bind(this);
  }

  numberVideosToShow() {
    let endIndex = 2;
    if(window.innerWidth > 1312) {
      endIndex = 6;
    } else if(window.innerWidth > 1132) {
      endIndex = 5;
    } else if(window.innerWidth > 900) {
      endIndex = 4;
    } else if(window.innerWidth > 694) {
      endIndex = 3;
    }

    this.setState({ endIndex });
  }

  render() {

    return (
      <div className='category-box'>
        <h1 className='category-box-title'>{this.props.title}</h1>
        <div className='category-box-videos'>
          { this.renderVideos() }
        </div>

      </div>
    )
  }
}

export { CategoryBox };
