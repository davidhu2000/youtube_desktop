import { combineReducers } from 'redux';

import queryReducer from 'common/query/reducer';
import settingReducer from 'common/setting/reducer';

import channelDetailsReducer from 'modules/channel/reducer';
import homeChannelsReducer from 'modules/home/reducer';
import playerDetailsReducer from 'modules/player/reducer';
import playlistsReducer from 'modules/playlists/reducer';
import recommendedReducer from 'modules/recommended/reducer';
import searchResultReducer from 'modules/search_index/reducer';
import subscriptionsReducer from 'modules/subscriptions/reducer';
import trendingReducer from 'modules/trending/reducer';
import userReducer from 'modules/user/reducer';

const rootReducer = combineReducers({
  channelDetails: channelDetailsReducer,
  homeChannels: homeChannelsReducer,
  playerDetails: playerDetailsReducer,
  playlists: playlistsReducer,
  query: queryReducer,
  recommended: recommendedReducer,
  searchResult: searchResultReducer,
  setting: settingReducer,
  subscriptions: subscriptionsReducer,
  trending: trendingReducer,
  user: userReducer
});

export default rootReducer;
