import { call, put, takeLatest, all } from 'redux-saga/effects';

import * as ApiService from '@services/api';

import { loadSuccess, loadFailure, loadSuccessWithoutData } from './actions';
import { LocationsTypes, Location } from './types';

function* load() {
  try {
    const locations: Location[] = yield call(ApiService.getLocations);
    if (locations.length) {
      yield put(loadSuccess(locations));
    } else {
      yield put(loadSuccessWithoutData());
    }
  } catch (error) {
    yield put(loadFailure());
  }
}

export default all([takeLatest(LocationsTypes.LOAD_REQUEST, load)]);
