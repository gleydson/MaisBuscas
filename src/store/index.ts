import { AsyncStorage } from 'react-native';

import { createStore, compose, applyMiddleware, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { LocationsState } from '@ducks/locations/types';
import { CompaniesState } from '@ducks/companies/types';
import reducers from './ducks/rootReducer';
import sagas from './ducks/rootSaga';
import { SettingsState } from './ducks/settings/types';

const persistConfig = {
  key: '@MaisBusca',
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
const composer = compose(applyMiddleware(...middlewares));

export interface ApplicationState {
  companies: CompaniesState;
  locations: LocationsState;
  settings: SettingsState;
}

const store: Store<ApplicationState> = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
