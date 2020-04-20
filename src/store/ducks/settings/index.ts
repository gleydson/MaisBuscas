import { Reducer } from 'redux';

import { SettingsState, SettingsTypes } from './types';

const INITIAL_STATE: SettingsState = {
  currentLocation: null,
  currentCompany: null
};

const reducer: Reducer<SettingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsTypes.SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case SettingsTypes.SET_CURRENT_COMPANY:
      return { ...state, currentCompany: action.payload };
    default:
      return state;
  }
};

export default reducer;
