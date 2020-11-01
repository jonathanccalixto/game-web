import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(var(--light-base), 0.1);
  height: 100vh;
  padding: 50px;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: var(--light);
  display: flex;
  font-family: 'Bungee Shade', 'Roboto', sans-serif;
  font-size: 40px;
  letter-spacing: 2px;
  margin: 25px;
  text-align: center;
`;

export const Cards = styled.ul`
  align-items: center;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.li`
  background: var(--bg-primary);
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  padding: 15px;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    margin-bottom: 14px;
  }

  :hover {
    background: rgba(var(--primary-base), 0.2);
    transition: 350ms all;
  }
`;
