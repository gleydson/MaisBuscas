import React, { useContext } from 'react';
import { WebView } from 'react-native-webview';
import { ThemeContext } from 'styled-components';

import Header from '@components/header';

import { Container, KeyboardSafe } from './styled';

const RegisterNewCompany: React.FC = () => {
  const styled = useContext(ThemeContext);

  return (
    <KeyboardSafe>
      <Container>
        <Header goBackEnabled />
        <WebView
          source={{
            uri: 'http://apppainel.maisbusca.com/paginas/indique/index.html',
          }}
          injectedJavaScript={`
            document.querySelector('.subscribe.pix_builder_bg').style.backgroundColor = '${styled.colors.backgroundSecondary}';
            document.querySelector('body').style.backgroundColor = '${styled.colors.backgroundSecondary}';
            document.querySelector("#section_party_3 > div > div > div > div.headtext_style > div > p:nth-child(2) > span > span").style.color = '#000';
            document.querySelector("#section_party_3 > div > div > div > div.segment.pix_builder_bg").style.backgroundColor = '${styled.colors.primary}';
            document.querySelector('.pixfort_party_15 .subscribe_btn').style.background = '${styled.colors.primary}';
          `}
        />
      </Container>
    </KeyboardSafe>
  );
};

export default RegisterNewCompany;
