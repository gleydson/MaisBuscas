import React from 'react';
import LottieView from 'lottie-react-native';

import giftBox from '@assets/lottie/gift-box.json';
import {
  ModalContainer,
  Container,
  ContainerInner,
  ContainerAnimation,
  Title,
  Description,
  CancelButton,
  CancelButtonText,
  ActionButton,
  ActionButtonText,
  ContainerButton,
} from './styled';

interface Props {
  title?: string;
  message?: string;
  onPressCloseButton(): void;
  closeButtonText: string;
  onPressActionButton(): void;
  actionButtonText: string;
  visible: boolean;
}

const Modal: React.FC<Props> = ({
  visible,
  onPressCloseButton,
  closeButtonText,
  onPressActionButton,
  actionButtonText,
  message,
}) => {
  return (
    <ModalContainer
      visible={visible}
      onRequestClose={() => console.log('message')}
    >
      <Container>
        <ContainerInner>
          <ContainerAnimation>
            <LottieView
              style={{ width: 200, height: 200 }}
              autoSize
              autoPlay
              loop
              source={giftBox}
            />
          </ContainerAnimation>
          <Title>Parabéns! Você ganhou um super desconto.</Title>
          <Description>{message}</Description>
          <ContainerButton>
            <CancelButton onPress={onPressCloseButton}>
              <CancelButtonText>{closeButtonText}</CancelButtonText>
            </CancelButton>
            <ActionButton onPress={onPressActionButton}>
              <ActionButtonText>{actionButtonText}</ActionButtonText>
            </ActionButton>
          </ContainerButton>
        </ContainerInner>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
