import { all } from 'redux-saga/effects';

import locations from './locations/sagas';
import companies from './companies/sagas';

export default function* rootSaga() {
  yield all([locations, companies]);
}
