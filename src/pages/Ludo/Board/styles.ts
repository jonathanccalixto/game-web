import styled from 'styled-components';

export const Container = styled.div`
  height: calc(15 * 37px + 16 * 2px);
  width: calc(15 * 37px + 16 * 2px);

  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  div {
    border: 1px solid #fff;
    height: 100%;
    width: 100%;

    display: block;

    svg {
      height: 100%;
      width: 100%;
    }
  }
`;
