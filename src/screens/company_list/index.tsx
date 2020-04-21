import {
  NavigationProp,
  ParamListBase
} from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CompanyItem from '@components/company_item';
import DotsLoad from '@components/dots_load';
import Header from '@components/header';
import Search from '@components/search';
import { Company } from '@ducks/companies/types'

import {
  KeyboardSafe,
  Container,
  ContainerCompany,
  TouchableCompanyItem,
  ContainerDots,
} from './styled';
import { ApplicationState } from '../../store';
import { loadRequest } from '@store/ducks/companies/actions';
import { setCurrentCompany } from '@store/ducks/settings/actions';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export default function company_list({ navigation }: Props) {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: ApplicationState) => state.companies.loading
  );
  const currentLocation = useSelector(
    (state: ApplicationState) => state.settings.currentLocation
  );
  const companiesLoaded = useSelector(
    (state: ApplicationState) => state.companies.data
  )

  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [localLoading, setLocalLoading] = useState<boolean>(false);

  function loadCompanies() {
    setLocalLoading(true);
    const data = companiesLoaded[currentLocation!.id];
    setCompanies(data);
    setFilteredCompanies(data);
    setLocalLoading(false);
  }

  useEffect(() => {
    if (!companies.length && !filteredCompanies.length) {
      loadCompanies();
    }
  }, []);

  function normalize(text: string) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function handleSearch(text: string) {
    let companiesFiltered = [];
    if (text) {
      companiesFiltered = companies.filter(company => {
        const filter = normalize(company.search).includes(normalize(text));
        return filter ? company : undefined;
      });
    } else {
      companiesFiltered = companies;
    }

    if (filteredCompanies.length !== companiesFiltered.length) {
      setFilteredCompanies(companiesFiltered);
    }
  }

  function goToCompanyDetails(company: Company) {
    Keyboard.dismiss();
    dispatch(setCurrentCompany(company));
    navigation.navigate('CompanyDetails');
  }

  function fetchCompanies() {
    dispatch(loadRequest(currentLocation!.id));
  }

  function renderItem(company: Company) {
    return (
      <TouchableCompanyItem onPress={() => goToCompanyDetails(company)}>
        <CompanyItem
          name={company.name}
          address={company.address}
          phone={company.phone}
          whatsapp={company.whatsapp}
          logo={company.logoUrl}
          isSpecial={company.isSpecial}
        />
      </TouchableCompanyItem>
    );
  }

  function RenderLoadOrList() {
    if (localLoading || isLoading) {
      return (
        <ContainerDots>
          <DotsLoad />
        </ContainerDots>
      );
    }
    return (
      <ContainerCompany
        data={filteredCompanies}
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
        <Search onChangeText={handleSearch} />
        <RenderLoadOrList />
      </Container>
    </KeyboardSafe>
  );
}
