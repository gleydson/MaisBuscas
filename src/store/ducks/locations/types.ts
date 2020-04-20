export enum LocationsTypes {
  LOAD_REQUEST = '@locations/LOAD_REQUEST',
  LOAD_SUCCESS = '@locations/LOAD_SUCCESS',
  LOAD_FAILURE = '@locations/LOAD_FAILURE',
  LOAD_SUCCESS_WITHOUT_DATA = '@locations/LOAD_SUCCESS_WITHOUT_DATA'
}

export interface Location {
  id: number;
  name: string;
}

export interface LocationsState {
  readonly data: Location[];
  readonly loading: boolean;
  readonly error: boolean;
}
