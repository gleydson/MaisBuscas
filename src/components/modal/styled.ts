import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ModalContainer = styled.Modal.attrs({
  transparent: true,
  animationType: 'slide',
})``;

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ContainerInner = styled.View`
  background-color: #fff;
  width: ${width * 0.9}px;
  border-radius: 4px;
  align-items: center;
  padding: 15px;
`;

export const ContainerAnimation = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.fonts.bigger};
  text-transform: uppercase;
  font-weight: 600;
  color: #000;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.fonts.big};
  color: #000;
  padding: 50px 0;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 135px;
  padding: 10px 0;
  background-color: #ee5e69;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const CancelButtonText = styled.Text`
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 135px;
  padding: 10px 0;
  background-color: #25d366;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ActionButtonText = styled.Text`
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
`;
