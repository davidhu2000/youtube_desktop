import { combineReducers } from 'redux';
// import channelsReducer from './channels_reducer';
import channelDetailsReducer from 'modules/channels/reducer.js';
// import queryReducer from './query_reducer';
// import recommendedReducer from './recommended_reducer';
// import searchResultReducer from './search_result_reducer';
// import subscriptionsReducer from './subscriptions_reducer';
// import trendingReducer from './trending_reducer';
import userReducer from 'modules/user/reducer.js';
import settingReducer from 'common/setting_reducer.js';
// import playlistsReducer from './playlists_reducer';
// import playerDetailsReducer from './player_details_reducer';

const rootReducer = combineReducers({
  // channels: channelsReducer,
  channelDetails: channelDetailsReducer,
  // query: queryReducer,
  // recommended: recommendedReducer,
  // searchResult: searchResultReducer,
  // subscriptions: subscriptionsReducer,
  // trending: trendingReducer,
  user: userReducer,
  setting: settingReducer,
  // playlists: playlistsReducer,
  // playerDetails: playerDetailsReducer
});

export default rootReducer;
