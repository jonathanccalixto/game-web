import React from 'react';

import Player from './Player';
import Board from './Board';
import { Container } from './styles';

const Ludo: React.FC = () => {
  return (
    <Container>
      <Player />
      <Board />
    </Container>
  );
};

export default Ludo;
