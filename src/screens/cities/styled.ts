import { FlatList, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { darken } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
`;

export const Logo = styled.Image`
  margin: 40px 0 20px 0;
`;

export const ContainerLocations = styled(FlatList as new () => FlatList)`
  flex: 1;
  width: ${props => props.theme.metrics.widthScreen * 0.8}px;
`;

export const TouchableLocationItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const LocationItem = styled.View`
  background-color: ${props => darken(0.02, props.theme.colors.primary)};
  padding: 12px 15px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${props => darken(0.2, props.theme.colors.primary)};
  border-style: solid;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text`
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 14px;
`;

export const ContainerSocialMedia = styled.View`
  height: 60px;
  width: ${props => props.theme.metrics.widthScreen}px;
`;

export const Icon = styled(FeatherIcon)`
  font-size: 14px;
`;
