import React from 'react';
import PropTypes from 'prop-types';
import RelatedListItem from './related_list_item';

class Related extends React.Component {
  constructor(props) {
    super(props);

console.log(props)
    this.state = {
      autoplay: true
    };
  }

  renderRelatedVideos() {
    if (this.props.related.length !== 0) {
      let vids = this.props.related;
      return vids.map(vid => <RelatedListItem key={vid.etag} vid={vid} />)
    }
  }

  updateAutoplay(e) {
    this.setState({
      autoplay: e.target.checked
    });
  }

  render() {
    return (
      <div className="related-container" style={{width: this.props.width}}>
        <div className="related-title">
          <h2>Up next</h2>

          <div className="row press">
            <h2>autoplay</h2>
            <input
              type="checkbox"
              id="checked"
              checked={this.state.autoplay}
              onChange={this.updateAutoplay.bind(this)}
              className="cbx hidden"/>
            <label htmlFor="checked" className="lbl"></label>
          </div>
        </div>

        <div className="related-list">
          {this.renderRelatedVideos()}
        </div>
      </div>
    );
  }
}

Related.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  related: PropTypes.arrayOf(PropTypes.object)
};

Related.defaultProps = {
  width: '100%'
};

export { Related };
