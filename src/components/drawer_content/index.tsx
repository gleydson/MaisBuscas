import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { Linking, Share } from 'react-native';

import i18n from '@services/i18n';

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

const logo = require('@assets/images/drawer-image.png');

export default function drawer_content(props: DrawerContentComponentProps) {
  async function onShare() {
    const link = '';
    await Share.share({
      message:
        `Oi, você já viu o Mais Buscas ${link}`,
    });
  }

  async function onCloseApp() {
    // TODO:
  }

  function goHome() {
    props.navigation.navigate('CompanyList');
  }

  function goLocations() {
    props.navigation.navigate('LocationList');
  }

  function openWhatsapp() {
    const phone = '+5569984346425';
    const whatsapp = `whatsapp://send?phone=${phone}`;
    Linking.openURL(whatsapp);
  }

  async function openFacebook() {
    const facebook = 'fb://page/?id=316259978889108';
    const alternativeFacebook = 'https://www.facebook.com/appmaisbuscas';

    const canOpenURL = await Linking.canOpenURL(facebook);
    if (canOpenURL) {
      return Linking.openURL(facebook);
    }
    return Linking.openURL(alternativeFacebook);
  }

  async function openStore() {
    // TODO:
  }

  async function openInstagram() {
    const instagram = 'instagram://user?username=appmaisbuscas';
    const alternativeInstagram = 'https://www.instagram.com/appmaisbuscas';

    const canOpenURL = await Linking.canOpenURL(instagram);
    if (canOpenURL) {
      return Linking.openURL(instagram);
    }
    return Linking.openURL(alternativeInstagram);
  }

  async function openSite() {
    const website = 'https://maisbusca.com';

    const canOpenURL = await Linking.canOpenURL(website);
    if (canOpenURL) {
      await Linking.openURL(website);
    }
  }

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
        label={i18n.t('side-menu_rate')}
        icon={() => <Icon name='star' />}
        onPress={openStore}
      /> */}
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
      {/* <Item
        label={i18n.t('side-menu.exit')}
        icon={() => <ExitIcon name='exit-run' />}
        onPress={onCloseApp}
      /> */}
    </Container>
  );
}
