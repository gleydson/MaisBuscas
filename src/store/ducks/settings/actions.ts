import { action } from 'typesafe-actions';

import { SettingsTypes } from './types';
import { Location } from '@ducks/locations/types';
import { Company } from '../companies/types';

export const setCurrentLocation = (location: Location) =>
  action(SettingsTypes.SET_CURRENT_LOCATION, location);
export const setCurrentCompany = (company: Company) =>
  action(SettingsTypes.SET_CURRENT_COMPANY, company);