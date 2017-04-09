import { combineReducers } from 'redux';
import queryReducer from './query_reducer';
import searchResultReducer from './search_result_reducer';
import trendingReducer from './trending_reducer';
import channelsReducer from './channels_reducer';

const rootReducer = combineReducers({
  channels: channelsReducer,
  query: queryReducer,
  searchResult: searchResultReducer,
  trending: trendingReducer,
});

export default rootReducer;
