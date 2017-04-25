import { combineReducers } from 'redux';
import channelsReducer from './channels_reducer';
import queryReducer from './query_reducer';
import recommendedReducer from './recommended_reducer';
import searchResultReducer from './search_result_reducer';
import subscriptionsReducer from './subscriptions_reducer';
import trendingReducer from './trending_reducer';
import userReducer from './user_reducer';
import settingReducer from './setting_reducer';

const rootReducer = combineReducers({
  channels: channelsReducer,
  query: queryReducer,
  recommended: recommendedReducer,
  searchResult: searchResultReducer,
  subscriptions: subscriptionsReducer,
  trending: trendingReducer,
  user: userReducer,
  setting: settingReducer
});

export default rootReducer;
