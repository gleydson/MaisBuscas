import { Reducer } from 'redux';

import { LocationsState, LocationsTypes } from './types';

const INITIAL_STATE: LocationsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<LocationsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocationsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case LocationsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case LocationsTypes.LOAD_SUCCESS_WITHOUT_DATA:
      return {
        ...state,
        loading: false,
        error: false
      };
    case LocationsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
