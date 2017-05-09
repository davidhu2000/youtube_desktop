import { connect } from 'react-redux';

import { receiveQuery } from 'common/query/actions';
import { receiveSetting } from 'common/setting/actions';
import SearchIndex from './component';
import { searchVideos, clearVideos } from './actions';

const mapStateToProps = ({ query, searchResult, setting }) => ({
  query,
  searchResult,
  setting
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query)),
  searchVideos: (query, nextToken, pageNum) => dispatch(searchVideos(query, nextToken, pageNum)),
  clearVideos: () => dispatch(clearVideos()),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
