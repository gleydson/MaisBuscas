import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default {
  colors: {
    primary: '#FFB200',
    secondary: '#000',
    backgroundPrimary: '#232223',
    backgroundSecondary: '',
    text: '#fff',
    lighter: '#fff',
    light: '',
    regular: '#7C7C7C',
    dark: '#030303',
    darker: '#4E4E4E',
  },

  fonts: {
    bigger: '18px',
    big: '16px',
    medium: '14px',
    small: '12px',
    smaller: '10px',
    letterSpacing: '1px',
  },

  metrics: {
    widthScreen: width,
    heightScreen: height,
  },
};
