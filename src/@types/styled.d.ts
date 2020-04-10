import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      text: string;
      lighter: string;
      light: string;
      regular: string;
      dark: string;
      darker: string;
    };

    fonts: {
      bigger: string;
      big: string;
      medium: string;
      small: string;
      smaller: string;
      letterSpacing: string;
    };

    metrics: {
      widthScreen: number;
      heightScreen: number;
    };
  }
}
