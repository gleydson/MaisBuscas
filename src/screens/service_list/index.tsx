/* eslint-disable max-len */
import React, { useState } from 'react';

import Header from '@components/header';
import ServiceItem from '@components/service_item';

import { Container, ContainerServices, TouchableServiceItem } from './styled';

interface Service {
  id: number;
  name: string;
  address: string;
  whatsapp: string;
  website: string;
  description: string;
  locationId: number;
}

export default function service_list() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: 'Rua A, 55 - Eusébio, CE',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 2,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 3,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 4,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 5,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 6,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 7,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 8,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 9,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
    {
      id: 10,
      name: '1° Oficio de Registro de Imóveis e Anexos',
      address: '',
      whatsapp: '7865434567',
      website: 'www.google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe amet facere fuga doloribus maxime placeat esse! Animi saepe fugit fuga ex recusandae itaque quia sit consequuntur quod similique!',
      locationId: 1,
    },
  ]);

  function goToServiceDetails() {
    // TODO:
  }

  function renderItem(item: { item: Service }) {
    return (
      <TouchableServiceItem onPress={goToServiceDetails}>
        <ServiceItem
          name={item.item.name}
          address={item.item.address}
          phone={item.item.whatsapp}
        />
      </TouchableServiceItem>
    );
  }

  return (
    <Container>
      <Header title='example' />
      <ContainerServices
        data={services}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}
