import React, { useState } from 'react';

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
  navigation: {
    navigate(
      name: string,
      params?: {
        locationId: number;
      }
    ): void;
  };
}

export default function cities({ navigation }: Props) {
  const [locations, setLocations] = useState([
    {
      id: 1,
      state: 'RO',
      city: 'Cacoal',
    },
    {
      id: 2,
      state: 'MT',
      city: 'Campo Novo dos Parecis',
    },
    {
      id: 3,
      state: 'RO',
      city: 'Nova Brasilândia do Oeste',
    },
    {
      id: 4,
      state: 'RO',
      city: 'Pimenta Bueno',
    },
    {
      id: 5,
      state: 'RO',
      city: 'Rolim de Moura',
    },
    {
      id: 6,
      state: 'RO',
      city: 'São Miguel do Guaporé',
    },
    {
      id: 7,
      state: 'MT',
      city: 'Sapezal',
    },
    {
      id: 8,
      state: 'RO',
      city: 'Vilhena',
    },
  ]);

  function goToServiceListScreen(locationId: number) {
    navigation.navigate('ServiceList', { locationId });
  }

  function renderItem(item: { item: Location }) {
    return (
      <TouchableLocationItem
        onPress={() => goToServiceListScreen(item.item.id)}
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
