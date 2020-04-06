import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components';

import light from '@styles/themes/light';

import Routes from './routes';

export default function src() {
  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={light.colors.secondary}
          barStyle='light-content'
        />
        <SafeAreaView
          style={{ flex: 0, backgroundColor: light.colors.secondary }}
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
