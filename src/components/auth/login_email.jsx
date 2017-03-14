import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, hashHistory } from 'react-router';

class LoginEmail extends React.Component {
  constructor(props){
    super(props);
  }

  next() {
    if(this.props.email.length === 0) {
      document.getElementById('login-email-error').classList.remove('hidden');
      document.getElementById('login-email-input').classList.add('red-border');
    } else {
      hashHistory.push('/login-password');
    }
  }

  render() {
      return(
        <div className='login-page'>
          <div className='header-bar'>
            <div className="header" >
              <div className="logo"></div>
            </div>

          </div>
          <div className="main-content">
            <div className="banner">
              <h2>{"Sign in to continue to YouTube"}</h2>
            </div>
            <div className='card'>
              <div className='form'>
                <div className='profile-icon'></div>

                <input
                  id='login-email-input'
                  onChange={this.props.update('email')}
                  value={this.props.email}
                  className='login-input'
                  type='text'
                  placeholder='Enter your email' />

                <span id='login-email-error' className='error-message hidden'>{"Please enter your email."}</span>

                <input
                  className='login-submit'
                  onClick={this.next.bind(this)}
                  type='submit'
                  value='Next' />
              </div>
            </div>
          </div>

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
)(withRouter(LoginEmail));
