import { action } from 'typesafe-actions';

import { LocationsTypes, Location } from './types';

export const loadRequest = () => action(LocationsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Location[]) =>
  action(LocationsTypes.LOAD_SUCCESS, { data });

export const loadSuccessWithoutData = () =>
  action(LocationsTypes.LOAD_SUCCESS_WITHOUT_DATA);

export const loadFailure = () => action(LocationsTypes.LOAD_FAILURE);
