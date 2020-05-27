import React, { useCallback } from 'react';
import { ImageSourcePropType } from 'react-native';

import banner1 from '@assets/images/banners/1-.png';
import banner2 from '@assets/images/banners/2-.png';
import { Container, Carousel, ContainerItem, Card } from './styles';

interface ItemProps {
  item: { image: ImageSourcePropType };
  index: number;
}

const Banner: React.FC = () => {
  const data = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
  ];

  const renderItem = useCallback(({ item, index }: ItemProps) => {
    return (
      <ContainerItem key={String(index)}>
        <Card source={item.image} />
      </ContainerItem>
    );
  }, []);

  return (
    <Container>
      <Carousel data={data} renderItem={renderItem} />
    </Container>
  );
};

export default Banner;
