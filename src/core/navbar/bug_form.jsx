/* global localStorage */
import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

class BugForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOutside(e) {
    let notNavbarButton = !e.target.classList.contains('navbar-bug-icon');
    if (notNavbarButton) {
      this.props.toggleDropdown('bugForm');
    }
  }

  render() {
    return (
      <div id='dropdown-menu'>
        bug form
      </div>
    );
  }
}

BugForm.propTypes = {
  toggleDropdown: PropTypes.func.isRequired
};

export default enhanceWithClickOutside(BugForm);
