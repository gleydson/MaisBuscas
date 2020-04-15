import {
  RouteProp,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import Realm from 'realm';

import CompanyItem from '@components/company_item';
import DotsLoad from '@components/dots_load';
import Header from '@components/header';
import Search from '@components/search';
import { Location } from '@screens/location_list';
import { getCompanies } from '@services/api';
import {
  saveCompanies,
  getCompaniesByLocationId,
} from '@services/database/services/company_service';

import { RootStackParamList } from '../../routes';
import {
  KeyboardSafe,
  Container,
  ContainerCompany,
  TouchableCompanyItem,
  ContainerDots,
} from './styled';

export interface Company {
  id: number;
  name: string;
  description: string;
  address: string;
  logoUrl: string;
  categoryId: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  twitter: string;
  youtube: string;
  website: string;
  locationId: number;
  isSpecial: boolean;
}

type CompanyListScreenRouteProp = RouteProp<RootStackParamList, 'CompanyList'>;

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: CompanyListScreenRouteProp;
}

export default function company_list({ route }: Props) {
  const [companies, setCompanies] = useState<
    Realm.Results<Company & Realm.Object>
  >();
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<Location>();

  async function loadCompanies() {
    const value = currentLocation?.id ? String(currentLocation.id) : '';
    const data = await getCompaniesByLocationId(value, searchText);
    setCompanies(data);
  }

  async function fetchCompanies() {
    setIsLoading(true);
    try {
      const data = await getCompanies();
      await saveCompanies(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`error ${err}`);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (!currentLocation) {
      setCurrentLocation(route.params.location);
    }
    loadCompanies();
  }, [searchText, currentLocation]);

  function goToCompanyDetails() {
    Keyboard.dismiss();
    // TODO:
  }

  function renderItem(company: Company) {
    return (
      <TouchableCompanyItem onPress={goToCompanyDetails}>
        <CompanyItem
          name={company.name}
          address={company.address}
          phone={company.phone}
          isSpecial={company.isSpecial}
        />
      </TouchableCompanyItem>
    );
  }

  function RenderLoadOrList() {
    if (isLoading) {
      return (
        <ContainerDots>
          <DotsLoad />
        </ContainerDots>
      );
    }
    return (
      <ContainerCompany
        data={companies}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => String(item.id)}
        onRefresh={fetchCompanies}
        refreshing={isLoading}
      />
    );
  }

  return (
    <KeyboardSafe>
      <Container>
        <Header title={currentLocation?.name} />
        <Search onChangeText={setSearchText} />
        <RenderLoadOrList />
      </Container>
    </KeyboardSafe>
  );
}
