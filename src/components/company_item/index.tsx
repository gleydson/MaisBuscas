import React from 'react';
import { Linking } from 'react-native';

import {
  Container,
  ContainerLogo,
  Logo,
  ContainerInfo,
  ContainerAddress,
  Address,
  CompanyName,
  Button,
  ButtonText,
  Icon,
} from './styled';

interface Props {
  logo?: string;
  name: string;
  address: string;
  phone: string;
}

const defaultCompanyLogo = require('@assets/images/default-company-logo.png');

const company_item: React.SFC<Props> = ({ logo, name, address, phone }) => {
  async function callTo(phoneNumber: string) {
    const tel = `tel:${phoneNumber}`;
    const canOpenURL = await Linking.canOpenURL(tel);
    if (canOpenURL) {
      Linking.openURL(tel);
    }
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo
          source={logo ? { uri: logo } : defaultCompanyLogo}
          defaultSource={defaultCompanyLogo}
        />
      </ContainerLogo>
      <ContainerInfo>
        <CompanyName>{name}</CompanyName>
        <ContainerAddress>
          <Icon name='map-marker' />

          <Address>{address || 'endereço não informado'}</Address>
        </ContainerAddress>
        <Button onPress={() => callTo(phone)}>
          <ButtonText>ligar</ButtonText>
        </Button>
      </ContainerInfo>
    </Container>
  );
};

export default company_item;
