/* global window */
import { merge } from 'lodash';
import { RECEIVE_SETTING } from "./actions";

let _defaultState = {
  windowWidth: null,
  sidebarVisible: window.innerWidth >= 1312,
  isLoading: true
};

const settingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SETTING:
      return merge({}, state, action.setting);
    default:
      return state;
  }
};

export default settingReducer;
