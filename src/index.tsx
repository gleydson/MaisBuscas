import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components';

import dark from '@styles/themes/dark';

import Routes from './routes';

export default function src() {
  return (
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
  );
}
