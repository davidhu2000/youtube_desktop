import React from 'react';
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
