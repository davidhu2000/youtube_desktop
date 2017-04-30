import { connect } from 'react-redux';
import SearchIndex from './component';

import { receiveQuery } from 'common/query/actions';
import { receiveSetting } from 'common/setting/actions';
import { searchVideos, clearVideos } from './actions';

const mapStateToProps = ({ query, searchResult, setting }) => ({
  query,
  searchResult,
  setting
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query)),
  searchVideos: (query, nextPageToken, pageNumber) => dispatch(searchVideos(query, nextPageToken, pageNumber)),
  clearVideos: () => dispatch(clearVideos()),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
