import React from 'react';
import { CategoryBoxItem } from './category_box_item';

class CategoryBox extends React.Component {

  render() {
    return (
      <div>
        <h1>Trending</h1>
        <CategoryBoxItem vid={this.props.vid} />
      </div>
    )
  }
}

export { CategoryBox };
