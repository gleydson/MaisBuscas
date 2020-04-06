import { FlatList } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerServices = styled(FlatList as new () => FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 10px 15px 0 15px;
`;

export const TouchableServiceItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  padding-bottom: 10px;
`;
