import React from 'react';

import i18n from '@services/i18n';

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
        placeholder={i18n.t('search.placeholder')}
        onChangeText={onChangeText}
        keyboardAppearance='dark'
        returnKeyType='search'
      />
    </Container>
  );
};

export default search;
