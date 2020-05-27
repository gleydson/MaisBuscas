import { Location } from '../locations/types';
import { Company } from '../companies/types';

export enum SettingsTypes {
  SET_CURRENT_LOCATION = '@settings/SET_CURRENT_LOCATION',
  SET_CURRENT_COMPANY = '@settings/SET_CURRENT_COMPANY',
  SET_IS_PHONE_INFORMED = '@settings/SET_IS_PHONE_INFORMED',
}

export interface SettingsState {
  readonly currentLocation: Location | null;
  readonly currentCompany: Company | null;
  readonly isPhoneInformed: boolean;
}
