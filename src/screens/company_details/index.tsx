import React from 'react';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';

import Header from '@components/header';
import { ApplicationState } from '@store/index';

import {
  Container,
  Content,
  Name,
  Description,
  BottomBar,
  ContainerPhone,
  ContainerWhatsapp,
  BottomText,
  Icon,
  Logo,
  ContainerButtons,
  ContainerAddress,
  Address,
  Info,
  ContainerContacts,
  ContactBox,
  TitleContact,
  Contact,
  ContainerSocialMedia,
  SocialMediaBox,
  SocialMedia,
  TitleSocialMedia
} from './styled';

export default function company_details() {
  const currentCompany = useSelector((state: ApplicationState) => state.settings.currentCompany);
  const currentLocation = useSelector((state: ApplicationState) => state.settings.currentLocation);

  function isPhoneDisabled() {
    return !(currentCompany?.phone)
  }

  function isWhatsappDisabled() {
    return !(currentCompany?.whatsapp);
  }

  function isAddressDisabled() {
    return !!(currentCompany?.address);
  }

  async function callTo() {
    const tel = `tel:${currentCompany?.phone}`;
    const canOpenURL = await Linking.canOpenURL(tel);
    if (canOpenURL && !isPhoneDisabled()) {
      Linking.openURL(tel);
    }
  }

  function goToWhatsapp() {
    const number = `whatsapp://send?phone=${currentCompany?.whatsapp}`;
    Linking.openURL(number);
  }

  async function goToWebsite() {
    const website = currentCompany?.website;

    if (website) {
      const canOpenURL = await Linking.canOpenURL(website);
      if (canOpenURL) {
        Linking.openURL(website);
      }
    }
  }

  async function goToFacebook() {
    const facebook = currentCompany?.facebook;

    if (facebook) {
      const canOpenURL = await Linking.canOpenURL(facebook);
      if (canOpenURL) {
        Linking.openURL(facebook);
      }
    }
  }

  async function goToInstagram() {
    const instagram = currentCompany?.instagram;

    if (instagram) {
      const canOpenURL = await Linking.canOpenURL(instagram);
      if (canOpenURL) {
        Linking.openURL(instagram);
      }
    }
  }

  async function goToAddress() {
    const location =
      `https://www.google.com/maps/place/${currentCompany!.address} ${currentLocation!.name}`;

    if (location) {
      const canOpenURL = await Linking.canOpenURL(location);
      if (canOpenURL) {
        Linking.openURL(location);
      }
    }
  }

  return (
    <Container>
      <Header goBackEnabled />
      <Content>
        <Logo
          uri={currentCompany?.logoUrl || 'http://apppainel.maisbusca.com/images/default.png'}
        />
        <Name>{currentCompany?.name}</Name>
        <Description>{currentCompany?.description}</Description>
        <Info>
          Essa empresa ou negócio é seu?{'\n\n'}

          Fale com a gente e melhore suas informações fazendo com que mais clientes encontre você!{'\n\n'}

          Ligue 69 3198-0800 e fale com um de nossos consultores.{'\n\n'}

          Mais Busca - A lista telefônica que conecta empresas e consulmidores.
        </Info>
        <ContainerContacts>
          <ContactBox>
            <TitleContact>Telefone</TitleContact>
            <Contact>{currentCompany?.phone}</Contact>
          </ContactBox>
          <ContactBox>
            <TitleContact>Whatsapp</TitleContact>
            <Contact>{currentCompany?.whatsapp || 'Não informado'}</Contact>
          </ContactBox>
        </ContainerContacts>
        <TitleSocialMedia>Redes sociais</TitleSocialMedia>
        <ContainerSocialMedia>
          <SocialMediaBox>
            <SocialMedia name="globe" onPress={goToWebsite} />
          </SocialMediaBox>
          <SocialMediaBox>
            <SocialMedia name="facebook" onPress={goToFacebook} />
          </SocialMediaBox>
          <SocialMediaBox>
            <SocialMedia name="instagram" onPress={goToInstagram} />
          </SocialMediaBox>
          <SocialMediaBox>
            <SocialMedia name="map" onPress={goToAddress} />
          </SocialMediaBox>
        </ContainerSocialMedia>
      </Content>
      <BottomBar>
        {isAddressDisabled() && (
          <ContainerAddress>
            <Address>{currentCompany?.address}</Address>
          </ContainerAddress>
        )}
        <ContainerButtons>
          <ContainerPhone
            isDisabled={isPhoneDisabled()}
            onPress={callTo}
          >
            <Icon isDisabled={isPhoneDisabled()} name="phone" />
            <BottomText isDisabled={isPhoneDisabled()}>Ligue para a empresa</BottomText>
          </ContainerPhone>
          <ContainerWhatsapp
            isDisabled={isWhatsappDisabled()}
            onPress={goToWhatsapp}
          >
            <Icon isDisabled={isWhatsappDisabled()} name="whatsapp" />
            <BottomText isDisabled={isWhatsappDisabled()}>Chame no Whatsapp</BottomText>
          </ContainerWhatsapp>
        </ContainerButtons>
      </BottomBar>
    </Container>
  );
}
