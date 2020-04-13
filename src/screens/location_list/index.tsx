import {
  NavigationProp,
  ParamListBase,
  DrawerActions,
} from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import DotsLoad from '@components/dots_load';
import { getCompanies, getLocations } from '@services/api';
import { saveCompanies } from '@services/database/services/company_service';
import {
  saveLocations,
  getAllLocations,
} from '@services/database/services/location_service';

import {
  Container,
  Logo,
  ContainerLocations,
  TouchableLocationItem,
  LocationItem,
  Description,
  Icon,
  ContainerDots,
} from './styled';

const logo = require('@assets/images/logo/logo-light.png');

export interface Location {
  id: number;
  name: string;
}

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export default function location_list({ navigation }: Props) {
  const [locations, setLocations] = useState<
    Realm.Results<Location & Realm.Object>
  >();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loadLocations() {
    const storedLocations = await getAllLocations();
    setLocations(storedLocations);
  }

  async function fetchCompanies() {
    setIsLoading(true);
    try {
      const data = await getCompanies();
      await saveCompanies(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`😡company error:  ${err}`);
    }
    setIsLoading(false);
  }

  async function fetchLocations() {
    try {
      const data = await getLocations();
      await saveLocations(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`location error: ${err}`);
    }
  }

  async function saveAndLoadLocation() {
    await loadLocations();
    await fetchLocations();
  }

  useEffect(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
    saveAndLoadLocation();
    fetchCompanies();
  }, []);

  function goToCompanyListScreen(location: Location) {
    navigation.navigate('CompanyList', { location });
  }

  function renderItem(item: { item: Location }) {
    return (
      <TouchableLocationItem onPress={() => goToCompanyListScreen(item.item)}>
        <LocationItem>
          <Description>{item.item.name}</Description>
          <Icon name='chevron-right' />
        </LocationItem>
      </TouchableLocationItem>
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
      <ContainerLocations
        showsVerticalScrollIndicator={false}
        data={locations}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    );
  }

  return (
    <Container>
      <Logo source={logo} />
      <RenderLoadOrList />
    </Container>
  );
}
