import styled from 'styled-components/native';
import SnapCarousel from 'react-native-snap-carousel';

export const Container = styled.View`
  padding: 20px 0 10px 0;

  justify-content: center;
  align-items: center;
`;

export const Carousel = styled(SnapCarousel).attrs(props => ({
  sliderWidth: props.theme.metrics.widthScreen,
  itemWidth: props.theme.metrics.widthScreen,
  loop: true,
  autoplay: true,
  layout: 'default',
}))``;

export const ContainerItem = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Card = styled.Image`
  border-radius: 4px;
`;
