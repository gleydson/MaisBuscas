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

const logo = require('@assets/images/logo/logo.png');

export interface Location {
  id: number;
  state: string;
  city: string;
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
      const response = await getCompanies();
      await saveCompanies(response.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`error:  ${err}`);
    }
  }

  async function fetchLocations() {
    try {
      const response = await getLocations();
      await saveLocations(response.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`error:  ${err}`);
    }
  }

  useEffect(() => {
    fetchLocations();
    fetchCompanies();
    loadLocations();
  }, []);

  function goToCompanyListScreen(locationId: number) {
    navigation.navigate('CompanyList', { locationId: String(locationId) });
  }

  function renderItem(item: { item: Location }) {
    return (
      <TouchableLocationItem
        onPress={() => goToCompanyListScreen(item.item.id)}
      >
        <LocationItem>
          <Description>{`${item.item.city} - ${item.item.state}`}</Description>
          <Icon name='chevron-right' />
        </LocationItem>
      </TouchableLocationItem>
    );
  }

  return (
    <Container>
      <Logo source={logo} />
      <ContainerLocations
        data={locations}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
      <ContainerSocialMedia />
    </Container>
  );
}
