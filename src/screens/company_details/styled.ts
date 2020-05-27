import { Image } from 'react-native-expo-image-cache';
import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

interface ContainerSlider {
  hasGallery: boolean;
}

export const ContainerSlider = styled.View<ContainerSlider>`
  height: 200px;
  background-color: ${props =>
    props.hasGallery
      ? props.theme.colors.backgroundPrimary
      : props.theme.colors.primary};
`;

export const ContainerLogo = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
})`
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 60px;
`;

export const Logo = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 10px;

  position: absolute;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    // alignItems: 'center',
    paddingBottom: 20,
  },
})``;

export const Name = styled.Text`
  padding: 20px 30px;
  font-size: ${props => props.theme.fonts.bigger};
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.Text`
  text-align: center;
  padding: 0 30px;
`;

export const Info = styled.Text`
  text-align: center;
  padding: 20px 15px;
  color: ${props => props.theme.colors.dark};
`;

export const Section = styled.View`
  margin-bottom: 20px;
  padding: 0 30px;
`;

export const SectionTitleContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionTitle = styled.Text`
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  font-weight: bold;
`;

export const SectionBar = styled.View`
  width: 150px;
  height: ${StyleSheet.hairlineWidth * 2}px;
  background-color: ${props => props.theme.colors.secondary};
  margin: 5px 0 15px 0;
`;

export const SectionContent = styled.View`
  flex-direction: row;
`;

export const SectionText = styled.Text`
  text-transform: capitalize;
`;

export const ContainerSocialMedia = styled.View`
  flex-direction: row;
`;

export const SocialMediaBox = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.backgroundPrimary};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const SocialMedia = styled(FontAwesome)`
  color: #fff;
  font-size: 25px;
`;

export const SectionContacts = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SectionMargin = styled.View`
  margin-right: 30px;
`;

interface Contact {
  color: string;
}

export const Contact = styled.Text<Contact>`
  font-size: ${props => props.theme.fonts.big};
  color: ${props => props.color};
  text-transform: uppercase;
  font-weight: 600;
`;

export const ContactIcon = styled(MaterialCommunityIcons)`
  margin-left: 5px;
  font-size: ${props => props.theme.fonts.medium};
`;

export const CategoryContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin: 30px 0;
  padding: 0 30px;
`;

export const Tag = styled.View`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;
`;

export const Category = styled.Text`
  padding: 5px 5px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
`;
