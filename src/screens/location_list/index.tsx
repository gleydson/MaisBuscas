import {
  NavigationProp,
  ParamListBase,
  DrawerActions,
} from '@react-navigation/native';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DotsLoad from '@components/dots_load';
import { Location } from '@ducks/locations/types';

import { loadRequest as loadLocationsRequest } from '@store/ducks/locations/actions';
import { loadRequest as loadCompaniesRequest } from '@store/ducks/companies/actions';
import { setCurrentLocation } from '@store/ducks/settings/actions';
import logo from '@assets/images/logo/logo.png';
import { ApplicationState } from '../../store';
import {
  Container,
  Logo,
  ContainerLocations,
  TouchableLocationItem,
  LocationItem,
  Description,
  Icon,
  ContainerDots,
  Refresh,
} from './styled';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const LocationList: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: ApplicationState) => state.locations.loading
  );
  const locations = useSelector(
    (state: ApplicationState) => state.locations.data
  );

  useEffect(() => {
    dispatch(loadLocationsRequest());

    navigation.dispatch(DrawerActions.closeDrawer());
  }, [dispatch, navigation]);

  useEffect(() => {
    locations.forEach(location => {
      dispatch(loadCompaniesRequest(location.id));
    });
  }, [dispatch, locations]);

  const goToCompanyListScreen = useCallback(
    (location: Location) => {
      dispatch(setCurrentLocation(location));
      navigation.navigate('CompanyList');
    },
    [dispatch, navigation]
  );

  const renderItem = useCallback(
    (item: { item: Location }) => {
      return (
        <TouchableLocationItem onPress={() => goToCompanyListScreen(item.item)}>
          <LocationItem>
            <Description>{item.item.name}</Description>
            <Icon name='chevron-right' />
          </LocationItem>
        </TouchableLocationItem>
      );
    },
    [goToCompanyListScreen]
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
      <ContainerLocations
        showsVerticalScrollIndicator={false}
        data={locations}
        renderItem={renderItem}
        keyExtractor={location => String(location.id)}
        refreshControl={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Refresh
            refreshing={isLoading}
            onRefresh={() => dispatch(loadLocationsRequest())}
          />
        }
      />
    );
  }, [dispatch, isLoading, locations, renderItem]);

  return (
    <Container>
      <Logo source={logo} />
      <RenderLoadOrList />
    </Container>
  );
};

export default LocationList;
