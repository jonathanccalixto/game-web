import React from 'react';

import { Container } from './styles';

const Player: React.FC = () => {
  return (
    <Container>
      <input placeholder="Nome do Jogador" />
    </Container>
  );
};

export default Player;
