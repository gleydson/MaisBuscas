import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { Linking, Share } from 'react-native';

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

interface IconProps {
  name: string;
  color: string;
  focused?: boolean;
  size: number;
}

const logo = require('@assets/images/logo/logo.png');

export default function drawer_content(props: DrawerContentComponentProps) {
  async function onShare() {
    try {
      await Share.share({
        message:
          'Oi, você já viu o Mais Busca: https://play.google.com/store/apps/details?id=br.com.lider.guia.delivery',
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
    }
  }

  function goHome() {
    props.navigation.navigate('CompanyList');
  }

  function goCities() {
    props.navigation.navigate('LocationList');
  }

  function goAbout() {
    props.navigation.navigate('About');
  }

  async function openWhatsapp() {
    const message = 'hello';
    const phone = '+5585999726766';
    const whatsapp = `whatsapp://send?text=${message}&phone=${phone}`;

    const canOpenURL = await Linking.canOpenURL(whatsapp);
    if (canOpenURL) {
      await Linking.openURL(whatsapp);
    }
  }

  async function openFacebook() {
    const facebook = 'fb://profile/1479476480';
    const alternativeFacebook = 'https://pt-br.facebook.com/zuck';

    const canOpenURL = await Linking.canOpenURL(facebook);
    if (canOpenURL) {
      return Linking.openURL(facebook);
    }
    return Linking.openURL(alternativeFacebook);
  }

  async function openInstagram() {
    const instagram = 'instagram://user?username=gleydsonsr';
    const alternativeInstagram = 'https://www.instagram.com/gleydsonsr';

    const canOpenURL = await Linking.canOpenURL(instagram);
    if (canOpenURL) {
      return Linking.openURL(instagram);
    }
    return Linking.openURL(alternativeInstagram);
  }

  async function openSite() {
    const website = 'https://github.com/gleydson';

    const canOpenURL = await Linking.canOpenURL(website);
    if (canOpenURL) {
      await Linking.openURL(website);
    }
  }

  function renderIcon({ name, color, size }: IconProps) {
    return <Icon name={name} color={color} size={size} />;
  }

  function renderSocialMediaIcon({ name, color, size }: IconProps) {
    return <SocialMediaIcon name={name} color={color} size={size} />;
  }

  return (
    <Container {...props}>
      <ContainerLogo>
        <Logo source={logo} />
      </ContainerLogo>
      <Item
        label='Início'
        icon={iconProps => renderIcon({ name: 'home', ...iconProps })}
        onPress={goHome}
      />
      <Item
        label='Todas as cidades'
        icon={iconProps => renderIcon({ name: 'map', ...iconProps })}
        onPress={goCities}
      />
      <Item
        label='Sobre Nós'
        icon={iconProps => renderIcon({ name: 'text', ...iconProps })}
        onPress={goAbout}
      />
      <Item
        label='Compartilhar'
        icon={iconProps => renderIcon({ name: 'share', ...iconProps })}
        onPress={onShare}
      />
      <Separator />
      <ContactUs>Fale conosco</ContactUs>
      <Item
        label='Whatsapp'
        icon={iconProps =>
          renderSocialMediaIcon({ name: 'whatsapp', ...iconProps })
        }
        onPress={openWhatsapp}
      />
      <Item
        label='Facebook'
        icon={iconProps =>
          renderSocialMediaIcon({ name: 'facebook', ...iconProps })
        }
        onPress={openFacebook}
      />
      <Item
        label='Instagram'
        icon={iconProps =>
          renderSocialMediaIcon({ name: 'instagram', ...iconProps })
        }
        onPress={openInstagram}
      />
      <Item
        label='Site'
        icon={iconProps =>
          renderSocialMediaIcon({ name: 'globe', ...iconProps })
        }
        onPress={openSite}
      />
    </Container>
  );
}
