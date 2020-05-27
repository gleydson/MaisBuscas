import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { Linking, Share } from 'react-native';

import i18n from '@services/i18n';

import logo from '@assets/images/drawer-image.png';
import {
  Container,
  Item,
  ContainerLogo,
  Logo,
  Separator,
  ContactUs,
  Icon,
  SocialMediaIcon,
} from './styled';

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const onShare = useCallback(async () => {
    const link = 'https://app.maisbuscas.com.br';
    await Share.share({
      message: `Baixe o Aplicativo Mais Buscas e Encontre o WhatsApp de Qualquer Negócio! Ajude o comércio local compartilhando esse link. ${link}`,
    });
  }, []);

  // const goToTicketList = useCallback(() => {
  //   props.navigation.navigate('TicketList');
  // }, [props]);

  const goHome = useCallback(() => {
    props.navigation.navigate('CompanyList');
  }, [props]);

  const goLocations = useCallback(() => {
    props.navigation.navigate('LocationList');
  }, [props]);

  const goToRegisterNewCompany = useCallback(() => {
    props.navigation.navigate('RegisterNewCompany');
  }, [props]);

  const openWhatsapp = useCallback(() => {
    const whatsapp = `whatsapp://send?phone=5569984346425&text=Ol%C3%A1.%20Preciso%20de%20suporte%20no%20App%20Mais%20Buscas`;
    Linking.openURL(whatsapp);
  }, []);

  const openFacebook = useCallback(async () => {
    const facebook = 'fb://page/?id=316259978889108';
    const alternativeFacebook = 'https://www.facebook.com/appmaisbuscas';

    const canOpenURL = await Linking.canOpenURL(facebook);
    if (canOpenURL) {
      return Linking.openURL(facebook);
    }
    return Linking.openURL(alternativeFacebook);
  }, []);

  const openStore = useCallback(() => {
    const storeLink = 'https://apps.apple.com/br/app/mais-buscas/id1509340100';
    Linking.openURL(storeLink);
  }, []);

  const openInstagram = useCallback(async () => {
    const instagram = 'instagram://user?username=appmaisbuscas';
    const alternativeInstagram = 'https://www.instagram.com/appmaisbuscas';

    const canOpenURL = await Linking.canOpenURL(instagram);
    if (canOpenURL) {
      return Linking.openURL(instagram);
    }
    return Linking.openURL(alternativeInstagram);
  }, []);

  const openSite = useCallback(async () => {
    const website = 'http://maisbuscas.com.br';

    const canOpenURL = await Linking.canOpenURL(website);
    if (canOpenURL) {
      await Linking.openURL(website);
    }
  }, []);

  return (
    <Container {...props}>
      <ContainerLogo>
        <Logo source={logo} />
      </ContainerLogo>
      <Item
        label={i18n.t('side-menu_start')}
        icon={() => <Icon name='home' />}
        onPress={goHome}
      />
      <Item
        label={i18n.t('side-menu_all-cities')}
        icon={() => <Icon name='map' />}
        onPress={goLocations}
      />
      {/* <Item
        label='Cupons'
        icon={() => <Icon name='price-tag' />}
        onPress={goToTicketList}
      /> */}
      <Item
        label='Cadastrar meu negócio'
        icon={() => <Icon name='medal' />}
        onPress={goToRegisterNewCompany}
      />
      <Item
        label={i18n.t('side-menu_rate')}
        icon={() => <Icon name='star' />}
        onPress={openStore}
      />
      <Item
        label={i18n.t('side-menu_share')}
        icon={() => <Icon name='heart' />}
        onPress={onShare}
      />
      <Separator />
      <ContactUs>{i18n.t('side-menu_contact-us')}</ContactUs>
      <Item
        label='Whatsapp'
        icon={() => <SocialMediaIcon name='whatsapp' />}
        onPress={openWhatsapp}
      />
      <Item
        label='Facebook'
        icon={() => <SocialMediaIcon name='facebook' />}
        onPress={openFacebook}
      />
      <Item
        label='Instagram'
        icon={() => <SocialMediaIcon name='instagram' />}
        onPress={openInstagram}
      />
      <Item
        label='Site'
        icon={() => <SocialMediaIcon name='globe' />}
        onPress={openSite}
      />
    </Container>
  );
};

export default DrawerContent;
