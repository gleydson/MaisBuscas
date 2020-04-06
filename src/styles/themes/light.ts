import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default {
  colors: {
    primary: '#FED107',
    secondary: '#000',
    background: '#F0F0F5',
    lighter: '#fff',
    light: '',
    regular: '#7C7C7C',
    dark: '#030303',
    darker: '#4E4E4E',
  },

  fonts: {
    bigger: '',
    big: '',
    medium: '',
    small: '',
    smaller: '',
    letterSpacing: '',
  },

  metrics: {
    widthScreen: width,
    heightScreen: height,
  },
};
