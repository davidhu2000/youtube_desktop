import { merge } from 'lodash';
import { RECEIVE_SETTING } from "../actions/setting_actions.js";

let _defaultState = {
  windowWidth: null,
  sidebarVisible: window.innerWidth >= 1300 ? true : false
};

const settingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch(action.type) {
    case RECEIVE_SETTING:
      return merge({}, state, action.setting);
    default:
      return state;
  }
};

export default settingReducer;
