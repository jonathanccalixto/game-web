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

export const Field = styled.rect`
  height: 37px;
  width: 37px;
  stroke-width: 2;
`;

export const FinishField = styled.div`
  height: 45px;
  width: 45px;
`;

export const BlankField = styled.div`
  height: 180px;
  width: 180px;
`;
