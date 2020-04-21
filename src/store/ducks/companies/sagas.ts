import { call, put, all, takeEvery } from 'redux-saga/effects';

import * as ApiService from '@services/api';

import { loadSuccess, loadFailure, loadSuccessWithoutData } from './actions';
import { CompaniesTypes, Company } from './types';

function* load(action: any) {
  const { locationId } = action.payload;
  try {
    const companies: Company[] = yield call(ApiService.getCompanies, locationId);
    if (companies.length) {
      yield put(loadSuccess(locationId, companies));
    } else {
      yield put(loadSuccessWithoutData());
    }
  } catch (error) {
    yield put(loadFailure());
  }
}

export default all([takeEvery(CompaniesTypes.LOAD_REQUEST, load)]);
