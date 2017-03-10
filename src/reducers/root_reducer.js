import { combineReducers } from 'redux';
import queryReducer from './query_reducer';
import searchResultReducer from './search_result_reducer';

const rootReducer = combineReducers({
  query: queryReducer,
  searchResult: searchResultReducer
});

export default rootReducer;
