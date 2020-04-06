import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src';
import 'react-native-gesture-handler';

require('react-native').unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
