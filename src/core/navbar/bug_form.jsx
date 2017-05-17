/* global localStorage */
import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

class BugForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOutside(e) {
    let notNavbarButton = !e.target.classList.contains('navbar-bug-icon');
    if (notNavbarButton) {
      this.props.toggleDropdown('bugForm');
    }
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.toggleDropdown('bugForm');
  }

  render() {
    return (
      <div className='dropdown-menu'>
        <h1 className='bug-form-title'>Submit a bug</h1>
        <textarea
          cols="30"
          rows="10"
          onChange={this.updateInput}
          value={this.state.input}
          className='bug-form-input'
        />
        <input type="submit" onClick={this.handleSubmit} className='bug-form-submit' />
      </div>
    );
  }
}

BugForm.propTypes = {
  toggleDropdown: PropTypes.func.isRequired
};

export default enhanceWithClickOutside(BugForm);
