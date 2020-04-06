import { useNavigation, DrawerActions } from '@react-navigation/native';
import React from 'react';

import { Container, Left, Center, Right, Title, IconFeather } from './styled';

interface Props {
  goBackEnabled?: boolean;
  title: string;
}

const header: React.SFC<Props> = ({ goBackEnabled, title }) => {
  const navigation = useNavigation();

  function handleLeftIcon() {
    const canGoBack = navigation.canGoBack();
    if (canGoBack && goBackEnabled) {
      return navigation.goBack();
    }
    return navigation.dispatch(DrawerActions.openDrawer());
  }

  function renderLeftIcon() {
    if (goBackEnabled) {
      return <IconFeather name='chevron-left' size={30} />;
    }
    return <IconFeather name='menu' size={30} />;
  }

  return (
    <Container>
      <Left onPress={handleLeftIcon}>{renderLeftIcon()}</Left>
      <Center>
        <Title>{title}</Title>
      </Center>
      <Right />
    </Container>
  );
};

export default header;
