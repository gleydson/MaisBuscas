import {
  NavigationProp,
  ParamListBase,
  DrawerActions,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import DotsLoad from '@components/dots_load';
import { Location } from '@ducks/locations/types';

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
import { ApplicationState } from '../../store';
import { loadRequest as loadLocationsRequest } from '@store/ducks/locations/actions';
import { loadRequest as loadCompaniesRequest } from '@store/ducks/companies/actions'
import { setCurrentLocation } from '@store/ducks/settings/actions'

const logo = require('@assets/images/logo/logo-light.png');

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export default function location_list({ navigation }: Props) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state: ApplicationState) => state.locations.loading);
  const locations = useSelector((state: ApplicationState) => state.locations.data);

  useEffect(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
    dispatch(loadLocationsRequest());
    dispatch(loadCompaniesRequest())
  }, []);

  function goToCompanyListScreen(location: Location) {
    dispatch(setCurrentLocation(location))
    navigation.navigate('CompanyList');
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
        keyExtractor={location => String(location.id)}
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
