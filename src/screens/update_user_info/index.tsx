import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setIsPhoneInformed } from '@store/ducks/settings/actions';
import Header from '@components/header';
import { sendPhoneNumber } from '@services/api';
import { Container, Input, Button, TextButton } from './styled';

const UpdateUserInfo: React.FC = () => {
  const dispatch = useDispatch();

  const [phone, setPhone] = useState('');

  const handleSubmit = useCallback(() => {
    const formattedPhoneNumber = phone.replace(/[^0-9]+/gi, '');
    if (formattedPhoneNumber) {
      sendPhoneNumber(formattedPhoneNumber);
    }
    dispatch(setIsPhoneInformed());
  }, [dispatch, phone]);

  return (
    <>
      <Header />
      <Container>
        <Input
          type='cel-phone'
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          placeholder='Celular com DDD'
          placeholderTextColor='#5E5F62'
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <Button onPress={handleSubmit}>
          <TextButton>Começar</TextButton>
        </Button>
      </Container>
    </>
  );
};

export default UpdateUserInfo;
