import { call, put, takeLatest, all } from 'redux-saga/effects';

import * as ApiService from '@services/api';

import { loadSuccess, loadFailure, loadSuccessWithoutData } from './actions';
import { CompaniesTypes, Company } from './types';

function* load() {
  try {
    const companies: Company[] = yield call(ApiService.getCompanies);
    if (companies.length) {
      yield put(loadSuccess(companies));
    }
    yield put(loadSuccessWithoutData());
  } catch (error) {
    yield put(loadFailure());
  }
}

export default all([takeLatest(CompaniesTypes.LOAD_REQUEST, load)]);
