import React from 'react';
import { parseDate } from '../../helpers';

class DetailsLower extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       showAllDecription: false
     };
  }

  parseDescription(description) {
    return description.map(line => {
      // TODO: parse description for links
      return (
          <span key={Math.random()}>
            {line}<br/>
          </span>
      );     
    });
  }

  addDescription() {
    if (this.props.description){
      let descript;
      if(this.state.showAllDecription) {
        descript = this.props.description.split('\n');
      } else {
        descript = [this.props.description.slice(0,200)];
      }

      return (
        <p className="description">
          { this.parseDescription(descript) }
        </p>
      );
    }
  }

  render() {
    return (
      <div className="details-lower-container">
        <h3 className="details-date">
          Published on {parseDate(this.props.publishedAt)}
        </h3>
        <div className="details-lower-description">
          {this.addDescription()}
          <button 
            className='details-description-button'
            onClick={ () => this.setState({ showAllDecription: !this.state.showAllDecription }) }>
            { this.state.showAllDecription ? 'Show less' : 'Show more' }
          </button>
        </div>
      </div>
    );
  }
}

export default DetailsLower;