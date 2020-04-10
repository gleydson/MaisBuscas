import { FlatList, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { darken } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  align-items: center;
`;

export const Logo = styled.Image`
  margin: 50px 0;
`;

export const ContainerLocations = styled(FlatList as new () => FlatList)`
  flex: 1;
  width: ${props => props.theme.metrics.widthScreen * 0.85}px;
`;

export const TouchableLocationItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const LocationItem = styled.View`
  padding: 20px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${props => props.theme.fonts.big};
  color: ${props => props.theme.colors.text};
`;

export const ContainerSocialMedia = styled.View`
  height: 60px;
  width: ${props => props.theme.metrics.widthScreen}px;
`;

export const Icon = styled(FeatherIcon)`
  font-size: ${props => props.theme.fonts.big};
  color: ${props => props.theme.colors.primary};
`;
