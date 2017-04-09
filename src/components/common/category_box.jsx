import React               from 'react';
import Slider              from 'react-slick';
import { CategoryBoxItem } from './category_box_item';

class CategoryBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: this.numberVideosToShow()
    }

    this.slideVideos = this.slideVideos.bind(this);
  }

  renderVideos() {
    return this.props.vids.slice(this.state.startIndex, this.state.endIndex).map( vid => (
      <CategoryBoxItem
        key={vid.etag}
        vid={vid} />
    ));
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateEndIndex.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateEndIndex.bind(this));
  }

  updateEndIndex() {
    let numVideos = this.numberVideosToShow();
    this.setState({
      endIndex: this.state.startIndex + numVideos
    });
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

  slideVideos(dir) {
    let numVideos = this.numberVideosToShow();

    let startIndex = this.state.startIndex + dir * numVideos;
    let endIndex   = this.state.endIndex + dir * numVideos;

    if(startIndex < 0) {
      startIndex = 0;
      endIndex = numVideos;
    }

    if(endIndex > 15) {
      endIndex = 15;
      startIndex = endIndex - numVideos;
    }

    this.setState({
      startIndex,
      endIndex
    });
  }

  render() {
    return (
      <div className='category-box'>
        <h1 className='category-box-title'>{this.props.title}</h1>
        <div className='category-box-videos'>
          { this.renderVideos() }
          { this.state.startIndex === 0 ? '' : <a className="prev" onClick={() => this.slideVideos(-1)}>&#10094;</a> }
          { this.state.endIndex  === 15 ? '' : <a className="next" onClick={() => this.slideVideos(1) }>&#10095;</a> }
        </div>

      </div>
    )
  }
}

export { CategoryBox };
