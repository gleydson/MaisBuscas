import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';

import { store, persistor } from './src/store';
import dark from './src/styles/themes/dark';

import Routes from './src/routes';

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={dark}>
          <NavigationContainer>
            <StatusBar
              backgroundColor={dark.colors.backgroundPrimary}
              barStyle='light-content'
            />
            <SafeAreaView
              style={{ flex: 0, backgroundColor: dark.colors.backgroundPrimary }}
            />
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
