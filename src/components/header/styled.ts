import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90px;
  background-color: ${props => props.theme.colors.backgroundPrimary};
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

export const Logo = styled.Image``;

export const Title = styled.Text`
  color: #fff;
  font-weight: 500;
  margin-top: 10px;
`;

export const IconFeather = styled(Feather)`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;
