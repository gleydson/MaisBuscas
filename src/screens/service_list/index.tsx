import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import Header from '@components/header';
import Search from '@components/search';
import ServiceItem from '@components/service_item';
import api from '@services/api';
import * as CompanyService from '@services/database/services/company_service';

import {
  KeyboardSafe,
  Container,
  ContainerServices,
  TouchableServiceItem,
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

  async function loadServices() {
    const data = await CompanyService.getAllCompanies(searchText);
    setCompanies(data);
  }

  async function fetchServices() {
    setIsLoading(true);
    try {
      const response = await api.get('/services');
      console.log('foi feito');
      await CompanyService.saveCompanies(response.data);
    } catch (err) {
      console.log('error', err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (!companies) {
      fetchServices();
    }
    loadServices();
  }, [searchText]);

  function goToServiceDetails() {
    Keyboard.dismiss();
    // TODO:
  }

  function renderItem(item: { item: Company }) {
    return (
      <TouchableServiceItem onPress={goToServiceDetails}>
        <ServiceItem
          name={item.item.name}
          address={item.item.address}
          phone={item.item.whatsapp}
        />
      </TouchableServiceItem>
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
        <ContainerServices
          data={companies}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          onRefresh={fetchServices}
          refreshing={isLoading}
        />
      </Container>
    </KeyboardSafe>
  );
}
