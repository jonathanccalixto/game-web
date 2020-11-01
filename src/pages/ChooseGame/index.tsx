import React from 'react';

import Image from 'components/Image';

import ludoImg from 'assets/ludo.png';

import { Container, Cards, Card, Title } from './styles';

interface IGame {
  route: string;
  name: string;
  src: string;
}

const games: IGame[] = [{ route: '/ludo', name: 'Ludo', src: ludoImg }];

const ChooseGame: React.FC = () => {
  return (
    <Container>
      <Title> Escolha um jogo:</Title>
      <Cards>
        {games.map(game => (
          <Card>
            <Image alt={game.name} src={game.src} width="120px" />
            {game.name}
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default ChooseGame;
