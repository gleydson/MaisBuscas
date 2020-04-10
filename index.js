import { AppRegistry, YellowBox } from 'react-native';

import { name as appName } from './app.json';
import App from './src';
import 'react-native-gesture-handler';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
  'Unable to find module for UIManager',
]);

require('react-native').unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
