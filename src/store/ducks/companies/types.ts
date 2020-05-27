export enum CompaniesTypes {
  LOAD_REQUEST = '@companies/LOAD_REQUEST',
  LOAD_SUCCESS = '@companies/LOAD_SUCCESS',
  LOAD_FAILURE = '@companies/LOAD_FAILURE',
  LOAD_SUCCESS_WITHOUT_DATA = '@companies/LOAD_SUCCESS_WITHOUT_DATA',
}

export interface Company {
  id: number;
  name: string;
  description: string;
  address: string;
  logoUrl: string;
  category: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  twitter: string;
  youtube: string;
  website: string;
  locationId: number;
  search: string;
  gallery: string[];
  isSpecial: boolean;
}

export interface CompaniesState {
  readonly data: {
    [locationId: string]: Company[];
  };
  readonly loading: boolean;
  readonly error: boolean;
}
