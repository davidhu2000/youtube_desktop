// import { merge } from 'lodash';
// import { RECEIVE_CHANNEL_DETAIL } from "../actions/youtube_video_actions";
//
// let _defaultState = {};
//
// const channelDetailsReducer = (state = _defaultState, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_CHANNEL_DETAIL:
//       return merge({}, state, {
//         detail: action.detail.items[0]
//       });
//     default:
//       return state;
//   }
// };
//
// export default channelDetailsReducer;
