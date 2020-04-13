import React from 'react';

import { Container, Input } from './styled';

interface Props {
  text?: string;
  onChangeText(text: string): void;
}

const search: React.SFC<Props> = ({ onChangeText }) => {
  return (
    <Container>
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='O que você procura?'
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default search;
