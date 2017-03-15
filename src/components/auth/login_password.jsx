import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, hashHistory } from 'react-router';

class LoginPassword extends React.Component {
  constructor(props){
    super(props);
  }

  next() {
    if(this.props.password.length === 0) {
      document.getElementById('login-password-error').classList.remove('hidden');
      document.getElementById('login-password-input').classList.add('red-border');
    } else {
      this.props.login();
    }
  }

  back() {
    hashHistory.goBack();
  }

  render() {
      return(
        <div className='form'>
          <div className='back-button' onClick={this.back}><i className="material-icons">keyboard_backspace</i></div>
          <div className='profile-icon colored'></div>
          <span>{this.props.email}</span>

          <input
            id='login-password-input'
            onChange={this.props.update('password')}
            value={this.props.password}
            className='login-input'
            type='password'
            placeholder='Password' />

          <span id='login-password-error' className='error-message hidden'>{"Please enter your password."}</span>

          <input
            className='login-submit'
            onClick={this.next.bind(this)}
            type='submit'
            value='Next' />
        </div>
      );
  }

}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPassword));
