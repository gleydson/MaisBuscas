import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CompanyItem from '@components/company_item';
import DotsLoad from '@components/dots_load';
import Header from '@components/header';
import Search from '@components/search';
import Banner from '@components/Banner';
import { Company } from '@ducks/companies/types';

import { loadRequest } from '@store/ducks/companies/actions';
import { setCurrentCompany } from '@store/ducks/settings/actions';
import {
  KeyboardSafe,
  Container,
  ContainerCompany,
  TouchableCompanyItem,
  ContainerDots,
} from './styled';
import { ApplicationState } from '../../store';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const CompanyList: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: ApplicationState) => state.companies.loading
  );
  const currentLocation = useSelector(
    (state: ApplicationState) => state.settings.currentLocation
  );
  const companiesLoaded = useSelector(
    (state: ApplicationState) => state.companies.data
  );

  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);

  const companies = useMemo(() => {
    if (currentLocation?.id) {
      return companiesLoaded[currentLocation.id];
    }
    return [];
  }, [companiesLoaded, currentLocation]);

  useEffect(() => {
    setFilteredCompanies(companies);
  }, [companies]);

  const normalize = useCallback((text: string) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }, []);

  const handleSearch = useCallback(
    (text: string) => {
      let companiesFiltered = [];
      if (text && companies.length) {
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
    },
    [companies, filteredCompanies.length, normalize]
  );

  const goToCompanyDetails = useCallback(
    (company: Company) => {
      Keyboard.dismiss();
      dispatch(setCurrentCompany(company));
      navigation.navigate('CompanyDetails');
    },
    [dispatch, navigation]
  );

  const fetchCompanies = useCallback(() => {
    if (currentLocation?.id) {
      dispatch(loadRequest(currentLocation.id));
    }
  }, [currentLocation, dispatch]);

  const renderItem = useCallback(
    (company: Company) => {
      return (
        <TouchableCompanyItem
          onPress={
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            company.isSpecial ? () => goToCompanyDetails(company) : () => {}
          }
        >
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
    },
    [goToCompanyDetails]
  );

  const RenderLoadOrList = useCallback(() => {
    if (isLoading) {
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
  }, [fetchCompanies, filteredCompanies, isLoading, renderItem]);

  return (
    <KeyboardSafe>
      <Container>
        <Header menuEnabled title={currentLocation?.name} />
        <Search onChangeText={handleSearch} />
        <Banner />
        <RenderLoadOrList />
      </Container>
    </KeyboardSafe>
  );
};

export default CompanyList;
