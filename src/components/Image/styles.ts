import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
  width?: string;
}

export const Container = styled.div<IProps>`
  height: 100%;
  ${({ height }) => height && `max-height: ${height};`}
  ${({ width }) => width && `max-width: ${width};`}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`;
