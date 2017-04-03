import { combineReducers } from 'redux';
import queryReducer from './query_reducer';
import searchResultReducer from './search_result_reducer';
import trendingReducer from './trending_reducer';

const rootReducer = combineReducers({
  query: queryReducer,
  searchResult: searchResultReducer,
  trending: trendingReducer
});

export default rootReducer;
