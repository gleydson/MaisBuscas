import { action } from 'typesafe-actions';

import { CompaniesTypes, Company } from './types';

export const loadRequest = () => action(CompaniesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Company[]) =>
  action(CompaniesTypes.LOAD_SUCCESS, { data });

export const loadSuccessWithoutData = () =>
  action(CompaniesTypes.LOAD_SUCCESS_WITHOUT_DATA);

export const loadFailure = () => action(CompaniesTypes.LOAD_FAILURE);
