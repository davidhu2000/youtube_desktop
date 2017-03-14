import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

import LoginEmail from './auth/login_email';
import LoginPassword from './auth/login_password';

class Auth extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    console.log(props);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  renderCard() {
    if(this.props.router.location.pathname === '/login-email') {
      return <LoginEmail email={this.state.email} update={this.update.bind(this)}/>
    } else {
      return (
        <LoginPassword
          email={this.state.email}
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
