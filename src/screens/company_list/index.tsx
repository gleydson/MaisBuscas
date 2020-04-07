import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import CompanyItem from '@components/company_item';
import Header from '@components/header';
import Search from '@components/search';
import api from '@services/api';
import * as CompanyService from '@services/database/services/company_service';

import {
  KeyboardSafe,
  Container,
  ContainerCompany,
  TouchableCompanyItem,
} from './styled';

export interface Company {
  id: number;
  name: string;
  address: string;
  whatsapp: string;
  website: string;
  description: string;
  locationId: number;
}

export default function company_list() {
  const [companies, setCompanies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function loadCompanies() {
    const data = await CompanyService.getAllCompanies(searchText);
    setCompanies(data);
  }

  async function fetchCompanies() {
    setIsLoading(true);
    try {
      const response = await api.get('/services');
      await CompanyService.saveCompanies(response.data);
    } catch (err) {
      console.log('error', err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (!companies) {
      fetchCompanies();
    }
    loadCompanies();
  }, [searchText]);

  function goToCompanyDetails() {
    Keyboard.dismiss();
    // TODO:
  }

  function renderItem(item: { item: Company }) {
    return (
      <TouchableCompanyItem onPress={goToCompanyDetails}>
        <CompanyItem
          name={item.item.name}
          address={item.item.address}
          phone={item.item.whatsapp}
        />
      </TouchableCompanyItem>
    );
  }

  function handleSearch() {
    Keyboard.dismiss();
  }

  return (
    <KeyboardSafe>
      <Container>
        <Header title='example' />
        <Search onSearch={handleSearch} onChangeText={setSearchText} />
        <ContainerCompany
          data={companies}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          onRefresh={fetchCompanies}
          refreshing={isLoading}
        />
      </Container>
    </KeyboardSafe>
  );
}
