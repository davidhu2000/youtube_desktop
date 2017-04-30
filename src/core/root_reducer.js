import { combineReducers } from 'redux';
import channelsReducer from 'modules/home/reducer'; // TODO: Change the name to HomeChannels
import channelDetailsReducer from 'modules/channels/reducer';
import queryReducer from 'common/query/reducer';
import recommendedReducer from 'modules/recommended/reducer';
import searchResultReducer from 'modules/search_index/reducer';
import subscriptionsReducer from 'modules/subscriptions/reducer';
import trendingReducer from 'modules/trending/reducer';
import userReducer from 'modules/user/reducer';
import settingReducer from 'common/setting/reducer';
import playlistsReducer from 'modules/playlists/reducer';
import playerDetailsReducer from 'modules/player/reducer';

const rootReducer = combineReducers({
  channels: channelsReducer,
  channelDetails: channelDetailsReducer,
  query: queryReducer,
  recommended: recommendedReducer,
  searchResult: searchResultReducer,
  subscriptions: subscriptionsReducer,
  trending: trendingReducer,
  user: userReducer,
  setting: settingReducer,
  playlists: playlistsReducer,
  playerDetails: playerDetailsReducer
});

export default rootReducer;
