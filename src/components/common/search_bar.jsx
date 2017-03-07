import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      query: ''
    };

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(e) {
    this.setState({
      query: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.receiveQuery(this.state.query);
  }

  render() {
    return (
      <div>
        <input type='text' onChange={ this.update }></input>
        <button type='submit' onClick={ this.submit }>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export { SearchBar };
