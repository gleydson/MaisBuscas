import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  padding: 7px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  height: 45px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${props => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border-radius: 5px;
  margin-left: 7px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;
