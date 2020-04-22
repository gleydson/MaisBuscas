import React from 'react';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';

import Header from '@components/header';
import { ApplicationState } from '@store/index';
import i18n from '@services/i18n';

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

  function goToWebsite() {
    const website = currentCompany?.website;

    if (website) {
      Linking.openURL(website);
    }
  }

  function goToFacebook() {
    const facebook = currentCompany?.facebook;

    if (facebook) {
      Linking.openURL(facebook);
    }
  }

  function goToInstagram() {
    const instagram = currentCompany?.instagram;

    if (instagram) {
      Linking.openURL(instagram);
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
        <Info>{i18n.t('company-details_info')}</Info>
        <ContainerContacts>
          <ContactBox>
            <TitleContact>{i18n.t('phone')}</TitleContact>
            <Contact>{currentCompany?.phone}</Contact>
          </ContactBox>
          <ContactBox>
            <TitleContact>{i18n.t('whatsapp')}</TitleContact>
            <Contact>{currentCompany?.whatsapp || i18n.t('uninformed')}</Contact>
          </ContactBox>
        </ContainerContacts>
        <TitleSocialMedia>{i18n.t('company-details_social-networks')}</TitleSocialMedia>
        <ContainerSocialMedia>
          {!!currentCompany?.website && (
            <SocialMediaBox onPressIn={goToWebsite}>
              <SocialMedia name="globe" />
            </SocialMediaBox>
          )}
          {!!currentCompany?.facebook && (
            <SocialMediaBox onPress={goToFacebook}>
              <SocialMedia name="facebook" />
            </SocialMediaBox>
          )}
          {!!currentCompany?.instagram && (
            <SocialMediaBox onPress={goToInstagram}>
              <SocialMedia name="instagram" />
            </SocialMediaBox>
          )}
          {!!currentCompany?.address && (
            <SocialMediaBox onPress={goToAddress}>
              <SocialMedia name="map" />
            </SocialMediaBox>
          )}
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
            <BottomText isDisabled={isPhoneDisabled()}>{i18n.t('company-details_call-the-company')}</BottomText>
          </ContainerPhone>
          <ContainerWhatsapp
            isDisabled={isWhatsappDisabled()}
            onPress={goToWhatsapp}
          >
            <Icon isDisabled={isWhatsappDisabled()} name="whatsapp" />
            <BottomText isDisabled={isWhatsappDisabled()}>{i18n.t('company-details_call-on-whatsapp')}</BottomText>
          </ContainerWhatsapp>
        </ContainerButtons>
      </BottomBar>
    </Container>
  );
}
