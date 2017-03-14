import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

import LoginEmail from './auth/login_email';

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
      })
      console.log(this.state);
    }
  }

  renderCard() {
    if(this.props.router.location.pathname === '/login') {
      return <LoginEmail email={this.state.email} update={this.update.bind(this)}/>
    } else {
      return <div>Testing</div>
    }
  }

  render() {
      return(
        <div>
          { this.renderCard() }
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
