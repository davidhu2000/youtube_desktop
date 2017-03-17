import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import YT_API_KEY from '../../config/api_key';

import LoginEmail from './auth/login_email';
import LoginPassword from './auth/login_password';

class Auth extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  login() {
    let baseUrl = 'https://accounts.google.com/o/oauth2/auth';
    let redirectUrl = 'http://localhost:5000/oauth2callback';
    let scope = 'https://gdata.youtube.com';

    let requestUrl = `${baseUrl}?client_id=${YT_API_KEY.clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=code&access_type=offline`

    window.open(requestUrl);

    let webView = document.createElement('webview');
    webView.addEventListener('new-window', e => {
      webView.src = requestUrl;
    })
  }

  renderCard() {
    if(this.props.router.location.pathname === '/login-email') {
      return <LoginEmail email={this.state.email} update={this.update.bind(this)}/>
    } else {
      return (
        <LoginPassword
          email={this.state.email}
          login={this.login}
          password={this.state.password}
          update={this.update.bind(this)} />
      )
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
              { this.renderCard() }
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
)(withRouter(Auth));
