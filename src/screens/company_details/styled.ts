import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'react-native-expo-image-cache';

import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30
  }
})``;

export const Logo = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  
`;

export const Name = styled.Text`
  padding: 20px 0;
  font-size: ${props => props.theme.fonts.bigger};
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.Text`
  text-align: center;
`;

export const Info = styled.Text`
  text-align: center;
  padding: 20px 15px;
  color: ${props => props.theme.colors.dark};
`;

export const ContainerContacts = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
`;

export const ContactBox = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TitleContact = styled.Text`
  text-align: center;
  font-weight: 500;
`;

export const Contact = styled.Text`
  font-size: ${props => props.theme.fonts.big};
  font-weight: 600;
`;

export const BottomBar = styled.View``;

export const ContainerAddress = styled.View`
  background-color: ${props => props.theme.colors.backgroundPrimary};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 15px 0;
  margin: 0 20px;
`;

export const Address = styled.Text`
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

export const ContainerButtons = styled.View`
background-color: ${props => props.theme.colors.primary};
flex-direction: row;
justify-content: space-around;
padding-bottom: ${initialWindowSafeAreaInsets?.bottom || 0}px;

`;

interface BottomBar {
  isDisabled: boolean;
}

export const ContainerPhone = styled.TouchableOpacity<BottomBar>`
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const ContainerWhatsapp = styled.TouchableOpacity.attrs((props: BottomBar) => ({
  activeOpacity: props.isDisabled ? 1 : 0.5,
})) <BottomBar>`
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const BottomText = styled.Text<BottomBar>`
  font-size: ${props => props.theme.fonts.small};
  color: ${({ isDisabled }) => isDisabled ? '#666' : '#000'};
`;

export const Icon = styled(FontAwesome) <BottomBar>`
  font-size: ${props => props.theme.fonts.big};
  color: ${({ isDisabled }) => isDisabled ? '#666' : '#000'};
`;

export const ContainerSocialMedia = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const TitleSocialMedia = styled.Text`
  font-size: ${props => props.theme.fonts.big};
  font-weight: bold;
  padding-bottom: 15px;
`;

export const SocialMediaBox = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.backgroundPrimary};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const SocialMedia = styled(FontAwesome)`
  color: #fff;
  font-size: 25px;
`;