import React from 'react';
import { CategoryBoxItem } from './category_box_item';

class VideosBox extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       numVideosPerRow: this.numberVideosToShow(),
       numRows: 2
     };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.windowWidth !== newProps.windowWidth) {
      this.setState({ numVideosPerRow: this.numberVideosToShow() });
    }
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
    return endIndex;
  }

  renderVideos() {
    let { numVideosPerRow, numRows } = this.state; 

    return this.props.vids.slice(0, numVideosPerRow * numRows).map( vid => (
      <CategoryBoxItem
        key={vid.etag}
        vid={vid} />
    ));
  }

  toggleMoreVideos() {  
    let numRows;
    if (this.state.numRows === 2) {
      numRows = Math.floor(this.props.vids.length / this.state.numVideosPerRow);
    } else {
      numRows = 2;
    }

    this.setState({ numRows });
  }

  render() {
    let buttonVal = this.state.numRows === 2 ? 'Show more' : 'Show fewer';
    return (
      <div className='category-box multiline'>
        <h1 className='category-box-title'>{this.props.title}</h1>
        <div className='category-box-videos multiline'>
          { this.renderVideos() }
        </div>
        <button className='category-box-toggle' onClick={this.toggleMoreVideos.bind(this)}>{ buttonVal }</button>

      </div>
    );
  }
}

export { VideosBox };