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
  logo: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  isSpecial: boolean;
}

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

  function goToWhatsapp() {
    const number = `whatsapp://send?phone=${whatsapp}`;
    Linking.openURL(number);
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo
          uri={logo || 'http://apppainel.maisbusca.com/images/default.png'}
        />
      </ContainerLogo>
      <ContainerInfo>
        <ContainerCompanyInfo>
          <CompanyName>{name}</CompanyName>
          <ContainerAddress>
            <Icon name='map-marker' />
            <Address>
              {address || i18n.t('company-item_address-not-found')}
            </Address>
          </ContainerAddress>
          <ContainerButtons>
            {!!phone && (
              <Button onPress={callTo}>
                <ButtonText>{i18n.t('company-item_button_call')}</ButtonText>
              </Button>
            )}
            {!!whatsapp && (
              <Button bgColor='#25D366' onPress={goToWhatsapp}>
                <ButtonText>{i18n.t('whatsapp')}</ButtonText>
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
