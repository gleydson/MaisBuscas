import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

export const Container = styled(DrawerContentScrollView)`
  margin-top: -5px;
`;

export const Item = styled(DrawerItem)``;

export const ContainerLogo = styled.View`
  background-color: ${props => props.theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Separator = styled.View`
  height: ${StyleSheet.hairlineWidth}px;
  background-color: #969696;
`;

export const ContactUs = styled.Text`
  padding: 10px 5px 5px 15px;
  color: ${props => props.theme.colors.regular};
  font-weight: 500;
`;

export const Icon = styled(EntypoIcon)`
  color: ${props => props.theme.colors.regular};
  margin-right: -20px;
  font-size: 16px;
`;

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.regular};
  font-size: 16px;
  margin-right: -20px;
  width: 16px;
`;
