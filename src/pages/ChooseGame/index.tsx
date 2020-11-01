import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={game.route}>
              <Image alt={game.name} src={game.src} width="120px" />
              {game.name}
            </Link>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default ChooseGame;
