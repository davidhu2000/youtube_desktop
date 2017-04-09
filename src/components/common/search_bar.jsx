import React           from 'react';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      query: ''
    };

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  update(e) {
    this.setState({
      query: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.receiveQuery(this.state.query);
    this.props.router.push('/search');
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.submit(e);
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type='text'
          placeholder="Search"
          onChange={ this.update }
          onKeyPress={ this.handleKeyPress } />

        <button type='submit' onClick={ this.submit } >
          <i className="material-icons">search</i>
        </button>
      </div>
    );
  }
}

export { SearchBar };
