import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  padding: 20px;
`;

export const Input = styled(TextInputMask).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.1,
  shadowRadius: 1,
  elevation: 1,
})`
  padding: 12px 15px;
  height: 45px;
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.medium};
  font-weight: 500;
  color: #333;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 12px 15px;
  height: 45px;
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.medium};
  font-weight: 500;
  background-color: ${props => props.theme.colors.primary};

  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
