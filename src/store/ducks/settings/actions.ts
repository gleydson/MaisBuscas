import { action, Action } from 'typesafe-actions';

import { Location } from '@ducks/locations/types';
import { SettingsTypes } from './types';
import { Company } from '../companies/types';

export const setCurrentLocation = (
  location: Location
): Action<SettingsTypes.SET_CURRENT_LOCATION> =>
  action(SettingsTypes.SET_CURRENT_LOCATION, location);

export const setCurrentCompany = (
  company: Company
): Action<SettingsTypes.SET_CURRENT_COMPANY> =>
  action(SettingsTypes.SET_CURRENT_COMPANY, company);

export const setIsPhoneInformed = (): Action<
  SettingsTypes.SET_IS_PHONE_INFORMED
> => action(SettingsTypes.SET_IS_PHONE_INFORMED);
