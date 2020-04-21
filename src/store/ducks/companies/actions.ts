import { action } from 'typesafe-actions';

import { CompaniesTypes, Company } from './types';

export const loadRequest = (locationId: number) =>
  action(CompaniesTypes.LOAD_REQUEST, { locationId });

export const loadSuccess = (locationId: number, data: Company[]) =>
  action(CompaniesTypes.LOAD_SUCCESS, { locationId, data });

export const loadSuccessWithoutData = () =>
  action(CompaniesTypes.LOAD_SUCCESS_WITHOUT_DATA);

export const loadFailure = () => action(CompaniesTypes.LOAD_FAILURE);
