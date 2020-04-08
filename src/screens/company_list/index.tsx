import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import Realm from 'realm';

import CompanyItem from '@components/company_item';
import Header from '@components/header';
import Search from '@components/search';
import { getCompanies } from '@services/api';
import {
  getAllCompanies,
  saveCompanies,
} from '@services/database/services/company_service';

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
  const [companies, setCompanies] = useState<
    Realm.Results<Company & Realm.Object>
  >();
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loadCompanies() {
    const data = await getAllCompanies(searchText);
    setCompanies(data);
  }

  async function fetchCompanies() {
    setIsLoading(true);
    try {
      const response = await getCompanies();
      await saveCompanies(response.data);
      setIsLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`error ${err}`);
    }
  }

  useEffect(() => {
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
