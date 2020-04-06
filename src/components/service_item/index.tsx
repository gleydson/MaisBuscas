import React from 'react';
import { Linking } from 'react-native';

import {
  Container,
  ContainerLogo,
  Logo,
  ContainerInfo,
  ContainerAddress,
  Address,
  ServiceName,
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

const defaultServiceLogo = require('@assets/images/default-service-logo.png');

const service_item: React.SFC<Props> = ({ logo, name, address, phone }) => {
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
          source={logo ? { uri: logo } : defaultServiceLogo}
          defaultSource={defaultServiceLogo}
        />
      </ContainerLogo>
      <ContainerInfo>
        <ServiceName>{name}</ServiceName>
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

export default service_item;
