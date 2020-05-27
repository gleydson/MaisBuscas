import React, { useCallback, useContext, useMemo } from 'react';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
import { ThemeContext } from 'styled-components';

import Header from '@components/Header';
import { ApplicationState } from '@store/index';

import {
  Container,
  Content,
  Name,
  Description,
  ContainerSlider,
  ContainerLogo,
  Section,
  SectionTitleContent,
  SectionMargin,
  SectionTitle,
  SectionBar,
  SectionContent,
  SectionText,
  SectionContacts,
  ContactIcon,
  CategoryContainer,
  Tag,
  Category,
  Logo,
  Contact,
  ContainerSocialMedia,
  SocialMediaBox,
  SocialMedia,
} from './styled';

const CompanyDetails: React.FC = () => {
  const styled = useContext(ThemeContext);
  const currentCompany = useSelector(
    (state: ApplicationState) => state.settings.currentCompany
  );
  const currentLocation = useSelector(
    (state: ApplicationState) => state.settings.currentLocation
  );

  const isPhoneDisabled = useCallback(() => {
    return !currentCompany?.phone;
  }, [currentCompany]);

  const isWhatsappDisabled = useCallback(() => {
    return !currentCompany?.whatsapp;
  }, [currentCompany]);

  const isAddressDisabled = useMemo(() => {
    return !!currentCompany?.address;
  }, [currentCompany]);

  const isContactDisabled = useMemo(() => {
    return !!currentCompany?.phone || !!currentCompany?.whatsapp;
  }, [currentCompany]);

  const isSocialNetworks = useMemo(() => {
    return (
      !!currentCompany?.website ||
      !!currentCompany?.facebook ||
      !!currentCompany?.instagram
    );
  }, [currentCompany]);

  const isCategoryExists = useMemo(() => {
    return !!currentCompany?.category;
  }, [currentCompany]);

  const callTo = useCallback(async () => {
    const tel = `tel:${currentCompany?.phone}`;
    const canOpenURL = await Linking.canOpenURL(tel);
    if (canOpenURL && !isPhoneDisabled()) {
      Linking.openURL(tel);
    }
  }, [currentCompany, isPhoneDisabled]);

  const goToWhatsapp = useCallback(() => {
    const number = `whatsapp://send?phone=${currentCompany?.whatsapp}&text=Olá. Encontrei seu contato no App Mais Buscas. https://app.maisbuscas.com.br`;
    if (!isWhatsappDisabled()) {
      Linking.openURL(number);
    }
  }, [currentCompany, isWhatsappDisabled]);

  const goToWebsite = useCallback(() => {
    const website = currentCompany?.website;

    if (website) {
      Linking.openURL(website);
    }
  }, [currentCompany]);

  const goToFacebook = useCallback(() => {
    const facebook = currentCompany?.facebook;

    if (facebook) {
      Linking.openURL(facebook);
    }
  }, [currentCompany]);

  const goToInstagram = useCallback(() => {
    const instagram = currentCompany?.instagram;

    if (instagram) {
      Linking.openURL(instagram);
    }
  }, [currentCompany]);

  const goToAddress = useCallback(async () => {
    if (currentCompany?.address && currentLocation?.name) {
      const location = `https://www.google.com/maps/place/${currentCompany.address} ${currentLocation.name}`;

      if (location) {
        const canOpenURL = await Linking.canOpenURL(location);
        if (canOpenURL) {
          Linking.openURL(location);
        }
      }
    }
  }, [currentCompany, currentLocation]);

  return (
    <Container>
      <Header goBackEnabled />

      <Content>
        <ContainerSlider hasGallery={!!currentCompany?.gallery.length}>
          <SliderBox
            images={currentCompany?.gallery}
            dotColor={styled.colors.primary}
            autoplay
            circleLoop
            disableOnPress
            sliderBoxHeight={200}
            imageLoadingColor={styled.colors.primary}
          />
        </ContainerSlider>
        <ContainerLogo>
          <Logo
            uri={
              currentCompany?.logoUrl ||
              'http://apppainel.maisbusca.com/images/default.png'
            }
          />
        </ContainerLogo>
        <Name>{currentCompany?.name}</Name>
        <Description>{currentCompany?.description}</Description>
        {/* <Info>{i18n.t('company-details_info')}</Info> */}

        {isCategoryExists && (
          <CategoryContainer>
            <Tag>
              <Category>{currentCompany?.category}</Category>
            </Tag>
          </CategoryContainer>
        )}

        {isAddressDisabled && (
          <Section>
            <SectionTitleContent>
              {/* <SectionIcon name='map' /> */}
              <SectionTitle>Endereço</SectionTitle>
            </SectionTitleContent>
            <SectionBar />
            <SectionContacts onPress={goToAddress}>
              <SectionText>{currentCompany?.address}</SectionText>
            </SectionContacts>
          </Section>
        )}

        {isContactDisabled && (
          <Section>
            <SectionTitleContent>
              {/* <SectionIcon name='phone' /> */}
              <SectionTitle>Contato</SectionTitle>
            </SectionTitleContent>
            <SectionBar />
            <SectionContent>
              <SectionMargin>
                <SectionContacts onPress={callTo}>
                  <Contact color={styled.colors.primary}>Ligar</Contact>
                  <ContactIcon name='phone' color={styled.colors.primary} />
                </SectionContacts>
              </SectionMargin>
              <SectionContacts onPress={goToWhatsapp}>
                <Contact color='#25D366'>Whatsapp</Contact>
                <ContactIcon name='whatsapp' color='#25D366' />
              </SectionContacts>
            </SectionContent>
          </Section>
        )}

        {isSocialNetworks && (
          <Section>
            <SectionTitleContent>
              {/* <SectionIcon name='globe' /> */}
              <SectionTitle>Redes Sociais</SectionTitle>
            </SectionTitleContent>
            <SectionBar />
            <ContainerSocialMedia>
              {!!currentCompany?.website && (
                <SocialMediaBox onPressIn={goToWebsite}>
                  <SocialMedia name='globe' />
                </SocialMediaBox>
              )}
              {!!currentCompany?.facebook && (
                <SocialMediaBox onPress={goToFacebook}>
                  <SocialMedia name='facebook' />
                </SocialMediaBox>
              )}
              {!!currentCompany?.instagram && (
                <SocialMediaBox onPress={goToInstagram}>
                  <SocialMedia name='instagram' />
                </SocialMediaBox>
              )}
            </ContainerSocialMedia>
          </Section>
        )}
      </Content>
      {/* <BottomBar>
        {isAddressDisabled() && (
          <ContainerAddress>
            <Address>{currentCompany?.address}</Address>
          </ContainerAddress>
        )}
        <ContainerButtons>
          <ContainerPhone isDisabled={isPhoneDisabled()} onPress={callTo}>
            <Icon isDisabled={isPhoneDisabled()} name='phone' />
            <BottomText isDisabled={isPhoneDisabled()}>
              {i18n.t('company-details_call-the-company')}
            </BottomText>
          </ContainerPhone>
          <ContainerWhatsapp
            isDisabled={isWhatsappDisabled()}
            onPress={goToWhatsapp}
          >
            <Icon isDisabled={isWhatsappDisabled()} name='whatsapp' />
            <BottomText isDisabled={isWhatsappDisabled()}>
              {i18n.t('company-details_call-on-whatsapp')}
            </BottomText>
          </ContainerWhatsapp>
        </ContainerButtons>
      </BottomBar> */}
    </Container>
  );
};

export default CompanyDetails;
