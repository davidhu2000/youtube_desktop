import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='channel'>
        <div>Cover photo</div>
        <div>subscribe </div>
        <div>navbar</div>
        <div>
          <div>Main Video</div>
          <div>Main Video Description</div>
        </div>
        <div>
          Sliders of videos
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
)(withRouter(Channel));
