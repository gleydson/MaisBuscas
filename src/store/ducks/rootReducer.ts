import { combineReducers } from 'redux';

import companies from './companies';
import locations from './locations';
import settings from './settings';

export default combineReducers({
  companies,
  locations,
  settings,
});
