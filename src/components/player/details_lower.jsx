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
      let buttonVal;
      if(this.state.showAllDecription) {
        descript = this.props.description.split('\n');
        buttonVal = 'Show less';
      } else {
        descript = [this.props.description.slice(0,200)];
        buttonVal = 'Show more';
      }

      return (
        <p className="description">
          { this.parseDescription(descript) }
          <hr />
          <button 
            className='details-description-button'
            onClick={ () => this.setState({ showAllDecription: !this.state.showAllDecription }) }>
            { buttonVal }
          </button>
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
        <div>
          {this.addDescription()}
        </div>
      </div>
    );
  }
}

export default DetailsLower;