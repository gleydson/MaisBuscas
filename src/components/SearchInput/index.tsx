import React from 'react';

import i18n from '@services/i18n';

import { Container, Input } from './styled';

interface Props {
  text?: string;
  onChangeText(text: string): void;
}

const SearchInput: React.SFC<Props> = ({ onChangeText }) => {
  return (
    <Container>
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        keyboardAppearance='dark'
        placeholder={i18n.t('search_placeholder')}
        onChangeText={onChangeText}
        returnKeyType='search'
      />
    </Container>
  );
};

export default SearchInput;
