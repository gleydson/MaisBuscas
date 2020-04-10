import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

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
  ContainerSocialMedia,
  Icon,
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
  async function loadLocations() {
    const storedLocations = await getAllLocations();
    setLocations(storedLocations);
  }

  async function fetchCompanies() {
    try {
      const data = await getCompanies();
      await saveCompanies(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`company error:  ${err}`);
    }
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

  useEffect(() => {
    fetchLocations();
    loadLocations();
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

  return (
    <Container>
      <Logo source={logo} />
      <ContainerLocations
        showsVerticalScrollIndicator={false}
        data={locations}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
      <ContainerSocialMedia />
    </Container>
  );
}
