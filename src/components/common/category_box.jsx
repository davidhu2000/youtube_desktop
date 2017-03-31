import React from 'react';
import Slider from 'react-slick';
import { CategoryBoxItem } from './category_box_item';

class CategoryBox extends React.Component {

  renderVideos() {
    return this.props.vids.slice(0, 6).map( vid => (
      <CategoryBoxItem
        key={vid.etag}
        vid={vid} />
    ));
  }

  render() {

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }

    return (
      <div className='category-box'>
        <h1 className='category-box-title'>{this.props.title}</h1>
        <Slider className='category-box-videos' {...settings}>
          { this.renderVideos() }
        </Slider>
      </div>
    )
  }
}

export { CategoryBox };
