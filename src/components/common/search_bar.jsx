import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      query: ''
    };
  }

  render() {
    return (
      <div>
        <input type='text'></input>
        <button type='submit'>
          <i class='fa fa-search'></i>
        </button>
      </div>
    );
  }
}

export { SearchBar };
