import FeatherIcon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';

export const Container = styled.View`
  height: 70px;
  background-color: ${props => props.theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Center = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Right = styled.View`
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text``;

export const IconFeather = styled(FeatherIcon)``;
