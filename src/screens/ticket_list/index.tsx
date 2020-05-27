import React, { useState, useCallback } from 'react';
import { FlatList, Linking } from 'react-native';

import Header from '@components/Header';
import Ticket from '@components/ticket';
import Modal from '@components/Modal';
import { Container } from './styled';

interface Ticket {
  id: number;
  company: string;
  whatsapp: string;
  location: string;
  discount: string;
  shortMessage: string;
  longMessage: string;
  code: string;
}

const TicketList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTicket, setCurrentTicket] = useState<Ticket>();
  const tickets: Ticket[] = [
    {
      id: 1,
      company: 'Mais Buscas',
      whatsapp: '5569984346425',
      location: 'Rolim de Moura',
      discount: '30%',
      shortMessage: '30% off em marketing digital',
      longMessage:
        'Quer se destacar nesse momento tão importante? Nós temos o plano ideal para você',
      code: 'A9DA8BADD5',
    },
  ];

  const openWhatsapp = useCallback(() => {
    const whatsapp = `whatsapp://send?phone=${currentTicket?.whatsapp}&text=Novo pedido ${currentTicket?.code}\n\nItem: *${currentTicket?.shortMessage}*\n\nPedido via Mais Buscas`;
    Linking.openURL(whatsapp);
  }, [currentTicket]);

  const handleClickTicker = useCallback((item: Ticket) => {
    setCurrentTicket(item);
    setShowModal(true);
  }, []);

  return (
    <>
      <Header goBackEnabled title='CUPONS' />
      <Container>
        <FlatList
          data={tickets}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Ticket
              onPress={() => handleClickTicker(item)}
              company={item.company}
              discount={item.discount}
              location={item.location}
              message={item.shortMessage}
            />
          )}
        />
        <Modal
          onPressCloseButton={() => setShowModal(false)}
          closeButtonText='cancelar'
          onPressActionButton={openWhatsapp}
          actionButtonText='pegar desconto'
          message={currentTicket?.longMessage}
          visible={showModal}
        />
      </Container>
    </>
  );
};

export default TicketList;
