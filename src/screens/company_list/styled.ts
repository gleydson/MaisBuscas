import { FlatList, Keyboard } from 'react-native';
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export const KeyboardSafe = styled.TouchableWithoutFeedback.attrs({
  onPress: Keyboard.dismiss,
})``;

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCompany = styled(FlatList as new () => FlatList).attrs({
  showsVerticalScrollIndicator: true,
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: { paddingHorizontal: 15, paddingVertical: 10 },
})``;

export const TouchableCompanyItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  padding-bottom: 10px;
`;

export const ContainerDots = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${initialWindowSafeAreaInsets?.bottom}px;
`;
