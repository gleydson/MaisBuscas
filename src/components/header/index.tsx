import { useNavigation, DrawerActions } from '@react-navigation/native';
import React, { useCallback } from 'react';

import logoHeader from '@assets/images/logo/logo.png';
import {
  Container,
  Left,
  Center,
  Right,
  Title,
  IconFeather,
  Logo,
} from './styled';

interface Props {
  goBackEnabled?: boolean;
  menuEnabled?: boolean;
  title?: string;
}

const Header: React.FC<Props> = ({ goBackEnabled, menuEnabled, title }) => {
  const navigation = useNavigation();

  const handleLeftIcon = useCallback(() => {
    const canGoBack = navigation.canGoBack();
    if (canGoBack && goBackEnabled) {
      return navigation.goBack();
    }
    return navigation.dispatch(DrawerActions.openDrawer());
  }, [goBackEnabled, navigation]);

  const renderLeftIcon = useCallback(() => {
    if (goBackEnabled) {
      return <IconFeather name='chevron-left' />;
    }
    if (menuEnabled) {
      return <IconFeather name='menu' />;
    }
    return null;
  }, [goBackEnabled, menuEnabled]);

  return (
    <Container>
      <Left onPress={handleLeftIcon}>{renderLeftIcon()}</Left>
      <Center>
        <Logo source={logoHeader} />
        {!!title && <Title>{title}</Title>}
      </Center>
      <Right />
    </Container>
  );
};

export default Header;
