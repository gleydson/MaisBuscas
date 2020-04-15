import React from 'react';

import Header from '@components/header';
import { Company } from '@screens/company_list';

import {
  Container,
  Content,
  CompanyName,
  BottomBar,
  ContainerPhone,
  ContainerWhastapp,
} from './styled';

interface Props {
  location: string;
  company: Company;
}

export default function company_details({ company }: Props) {
  return (
    <Container>
      <Header goBackEnabled />
      <Content>
        <CompanyName>{company.name}</CompanyName>
      </Content>
      <BottomBar>
        <ContainerPhone />
        <ContainerWhastapp />
      </BottomBar>
    </Container>
  );
}
