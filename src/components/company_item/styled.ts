import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
`;

export const ContainerLogo = styled.View``;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding: 5px;
  justify-content: space-between;
`;

export const CompanyName = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${props => props.theme.colors.regular};
`;

export const ContainerAddress = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Address = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${props => props.theme.colors.regular};
`;

export const Button = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 20, bottom: 10, right: 20 },
  activeOpacity: 0.5,
})`
  background-color: #0bb1cc;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  width: 80px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: ${props => props.theme.colors.regular};
  font-size: 12px;
`;
