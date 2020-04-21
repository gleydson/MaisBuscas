import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';

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

export const Icon = styled(Feather)`
  font-size: ${props => props.theme.fonts.big};
  color: ${props => props.theme.colors.primary};
`;

export const ContainerDots = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${(initialWindowSafeAreaInsets?.bottom || 0) + 50}px;
`;

export const Refresh = styled.RefreshControl.attrs({
  tintColor: '#fff'
})``;
