import { Reducer } from 'redux';

import { CompaniesState, CompaniesTypes } from './types';

const INITIAL_STATE: CompaniesState = {
  data: {},
  loading: false,
  error: false,
};

const reducer: Reducer<CompaniesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CompaniesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CompaniesTypes.LOAD_SUCCESS:
      const { locationId, data } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...state.data,
          [String(locationId)]: data
        }
      };
    case CompaniesTypes.LOAD_SUCCESS_WITHOUT_DATA:
      return { ...state, loading: false, error: false }
    case CompaniesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
