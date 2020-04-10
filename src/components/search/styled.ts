import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding: 7px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#5E5F62',
})`
  flex: 1;
  padding: 12px 15px;
  height: 45px;
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.medium};
  font-weight: 500;
  color: #333;
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
`;
