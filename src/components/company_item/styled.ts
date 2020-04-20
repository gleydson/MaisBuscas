import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'
import { Image } from 'react-native-expo-image-cache';

export const Container = styled.View`
  flex-direction: row;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
`;

export const ContainerLogo = styled.View`
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

export const Logo = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CompanyName = styled.Text`
  font-size: ${props => props.theme.fonts.medium};
  text-transform: capitalize;
  font-weight: 500;
  color: ${props => props.theme.colors.regular};
`;

export const ContainerAddress = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Address = styled.Text`
  font-size: ${props => props.theme.fonts.small};
  font-weight: 400;
  color: ${props => props.theme.colors.regular};
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
`;

interface Button {
  bgColor?: string;
}

export const Button = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 5, bottom: 10, right: 5 },
  activeOpacity: 0.5,
}) <Button>`
  background-color: ${props => props.bgColor || '#0bb1cc'};
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  width: 80px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${props => props.theme.fonts.smaller};
  text-transform: lowercase;
  font-weight: 500;
`;

export const Icon = styled(FontAwesome)`
  margin-right: 5px;
  color: ${props => props.theme.colors.regular};
  font-size: 12px;
`;

export const ContainerCompanyInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 5px;
`;

export const ContainerSpecialShape = styled.View`
  width: 30px;
`;

export const SpecialShape = styled.View`
  transform: rotate(90deg);
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-right-width: 100px;
  border-top-width: 100px;
  border-right-color: transparent;
  border-top-color: ${props => props.theme.colors.backgroundPrimary};
`;

export const StarIcon = styled(FontAwesome)`
  position: absolute;
  top: 3px;
  right: 0;
  margin-right: 5px;
  color: #fff;
  font-size: 9px;
`;
