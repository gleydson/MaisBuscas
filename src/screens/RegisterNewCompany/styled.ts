import styled from 'styled-components/native';
import { Keyboard } from 'react-native';

export const KeyboardSafe = styled.TouchableWithoutFeedback.attrs({
  onPress: Keyboard.dismiss,
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  position: relative;
`;
