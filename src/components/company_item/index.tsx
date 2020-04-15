import React from 'react';
import { Linking } from 'react-native';

import i18n from '@services/i18n';

import {
  Container,
  ContainerLogo,
  Logo,
  ContainerInfo,
  ContainerAddress,
  Address,
  CompanyName,
  ContainerButtons,
  Button,
  ButtonText,
  Icon,
  ContainerCompanyInfo,
  ContainerSpecialShape,
  SpecialShape,
  StarIcon,
} from './styled';

interface Props {
  logo?: string;
  name: string;
  address: string;
  phone?: string;
  whatsapp?: string;
  isSpecial?: boolean;
}

const defaultCompanyLogo = require('@assets/images/default-company-logo.png');

const company_item: React.SFC<Props> = ({
  logo,
  name,
  address,
  phone,
  whatsapp,
  isSpecial,
}) => {
  async function callTo() {
    const tel = `tel:${phone}`;
    const canOpenURL = await Linking.canOpenURL(tel);
    if (canOpenURL) {
      Linking.openURL(tel);
    }
  }

  async function goWhatsapp() {
    // TODO:
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
        <ContainerCompanyInfo>
          <CompanyName>{name}</CompanyName>
          <ContainerAddress>
            <Icon name='map-marker' />

            <Address>
              {address || i18n.t('company-item.address-not-found')}
            </Address>
          </ContainerAddress>
          <ContainerButtons>
            <Button onPress={callTo}>
              <ButtonText>{i18n.t('company-item.button.call')}</ButtonText>
            </Button>
            {whatsapp && (
              <Button bgColor='#25D366' onPress={goWhatsapp}>
                <ButtonText>whatsapp</ButtonText>
              </Button>
            )}
          </ContainerButtons>
        </ContainerCompanyInfo>
        {isSpecial && (
          <ContainerSpecialShape>
            <>
              <SpecialShape />
              <StarIcon name='star' />
            </>
          </ContainerSpecialShape>
        )}
      </ContainerInfo>
    </Container>
  );
};

export default company_item;
