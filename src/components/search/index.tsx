import React from 'react';

import { Container, Input, Button, ButtonText } from './styled';

interface Props {
  text?: string;
  onSearch(): void;
  onChangeText(text: string): void;
}

const search: React.SFC<Props> = ({ onSearch, onChangeText }) => {
  return (
    <Container>
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='O que você procura?'
        onChangeText={onChangeText}
      />
      <Button onPress={onSearch}>
        <ButtonText>Procurar</ButtonText>
      </Button>
    </Container>
  );
};

export default search;
