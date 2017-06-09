/* global fetch */
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { createUrlParams } from 'helpers';
import enhanceWithClickOutside from 'react-click-outside';

class BugForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      submitted: false
    };

    autoBind(this);
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

    let url = 'https://youtube-bugs.herokuapp.com/bugs';

    let body = {
      "bug[component]": this.props.location,
      "bug[description]": this.state.input
    };

    fetch(`${url}?${createUrlParams(body)}`, {
      method: "POST"
    });

    this.setState({ submitted: true });

    setTimeout(() => {
      this.props.toggleDropdown('bugForm');
    }, 3000);
  }

  render() {
    if (this.state.submitted) {
      return (
        <div className='dropdown-menu'>
          <h1 className='bug-form-title'>
            Thank you for reporting this bug.
            We will fix it ASAP.
          </h1>
        </div>
      );
    } else {
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
}

BugForm.propTypes = {
  toggleDropdown: PropTypes.func.isRequired
};

export default enhanceWithClickOutside(BugForm);
