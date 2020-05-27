import React from 'react';

import logo from '@assets/images/icon/icon.png';
import {
  Ticket,
  CompanyContent,
  Company,
  Content,
  City,
  Discount,
  DiscountValue,
  DiscountDescription,
  Product,
  ContainerLogo,
  Logo,
  Info,
} from './styled';

interface Props {
  onPress?(): void;
  company: string;
  discount: string;
  location: string;
  message: string;
}

const ticket: React.FC<Props> = ({
  onPress,
  company,
  discount,
  location,
  message,
}) => (
  <Ticket onPress={onPress}>
    <Content>
      <Discount>
        <DiscountValue>{discount}</DiscountValue>
        <DiscountDescription>de desconto</DiscountDescription>
      </Discount>
      <CompanyContent>
        <Info>
          <Company>{company}</Company>
          <City>{location}</City>
          <Product>{message}</Product>
        </Info>
        <ContainerLogo>
          <Logo source={logo} />
        </ContainerLogo>
      </CompanyContent>
    </Content>
  </Ticket>
);

export default ticket;
