import { combineReducers } from 'redux';
import channelsReducer from './channels_reducer';
import queryReducer from './query_reducer';
import trendingReducer from './trending_reducer';
import searchResultReducer from './search_result_reducer';
import subscriptionsReducer from './subscriptions_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  channels: channelsReducer,
  query: queryReducer,
  searchResult: searchResultReducer,
  subscriptions: subscriptionsReducer,
  trending: trendingReducer,
  user: userReducer,
});

export default rootReducer;
