import { Reducer } from 'redux';

import { SettingsState, SettingsTypes } from './types';

const INITIAL_STATE: SettingsState = {
  currentLocation: null,
  currentCompany: null,
  isPhoneInformed: false,
};

const reducer: Reducer<SettingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsTypes.SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case SettingsTypes.SET_CURRENT_COMPANY:
      return { ...state, currentCompany: action.payload };
    case SettingsTypes.SET_IS_PHONE_INFORMED:
      return { ...state, isPhoneInformed: true };
    default:
      return state;
  }
};

export default reducer;
