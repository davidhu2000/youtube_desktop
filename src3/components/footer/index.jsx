import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='footer'>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Footer));
