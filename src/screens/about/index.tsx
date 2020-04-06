import React from 'react';

import Header from '@components/header';

import { Container } from './styled';

export default function about() {
  return (
    <Container>
      <Header title='about' goBackEnabled />
    </Container>
  );
}
