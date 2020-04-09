import {
  RouteProp,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import Realm from 'realm';
import { RootDrawerParamList } from 'routes';

import CompanyItem from '@components/company_item';
import Header from '@components/header';
import Search from '@components/search';
import { getCompanies } from '@services/api';
import {
  getAllCompanies,
  saveCompanies,
  getCompaniesByLocationId,
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

type CompanyListScreenRouteProp = RouteProp<RootDrawerParamList, 'CompanyList'>;

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: CompanyListScreenRouteProp;
}

export default function company_list({ route, navigation }: Props) {
  const [companies, setCompanies] = useState<
    Realm.Results<Company & Realm.Object>
  >();
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentLocationId, setCurrentLocationId] = useState('');

  async function loadCompanies() {
    const data = await getCompaniesByLocationId(currentLocationId, searchText);
    setCompanies(data);
  }

  async function fetchCompanies() {
    setIsLoading(true);
    try {
      const response = await getCompanies();
      await saveCompanies(response.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`error ${err}`);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    setCurrentLocationId(route.params.locationId);
    const unsubscribe = navigation.addListener('focus', () => {
      setIsFocused(true);
    });
    loadCompanies();
    return () => {
      unsubscribe();
      setIsFocused(false);
    };
  }, [searchText, currentLocationId, navigation, isFocused]);

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
