import React, { useCallback } from 'react';
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

const CompanyItem: React.SFC<Props> = ({
  logo,
  name,
  address,
  phone,
  whatsapp,
  isSpecial,
}) => {
  const callTo = useCallback(async () => {
    const tel = `tel:${phone}`;
    const canOpenURL = await Linking.canOpenURL(tel);
    if (canOpenURL) {
      Linking.openURL(tel);
    }
  }, [phone]);

  const goToWhatsapp = useCallback(() => {
    const number = `whatsapp://send?phone=${whatsapp}&text=Olá. Encontrei seu contato no App Mais Buscas. https://app.maisbuscas.com.br`;
    Linking.openURL(number);
  }, [whatsapp]);

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

export default CompanyItem;
