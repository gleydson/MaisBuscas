import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Ticket = styled.TouchableOpacity`
  width: ${width * 0.95}px;
  padding: 5px;
`;

export const Content = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
})`
  flex-direction: row;
`;

export const CompanyContent = styled.View`
  flex: 1;
  border-radius: 5px;
  background-color: #ffe178;
  padding: 5px 5px 5px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.View`
  justify-content: space-between;
`;

export const Company = styled.Text`
  font-size: ${props => props.theme.fonts.big};
  font-weight: bold;
`;

export const City = styled.Text`
  font-size: ${props => props.theme.fonts.medium};
`;

export const Product = styled.Text``;

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 3px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const Discount = styled.View`
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const DiscountValue = styled.Text`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
`;
export const DiscountDescription = styled.Text`
  font-size: 12px;
  text-align: center;
`;

export const BarCode = styled.View`
  background-color: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
