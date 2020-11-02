import React from 'react';

import {
  borderSize,
  buildFields,
  buildFinishFields,
  buildHeadquarters,
  size,
} from './constants';
import { Container } from './styles';

const fields = buildFields();
const finishFields = buildFinishFields();
const headquarters = buildHeadquarters();

const Board: React.FC = () => {
  return (
    <Container>
      <div>
        <svg>
          {fields.map(({ bg, border, ...rest }) => (
            <rect
              {...rest}
              key={rest.name}
              fill={bg}
              height={size}
              width={size}
              stroke={border}
              strokeWidth={borderSize}
            />
          ))}
          {finishFields.map(({ bg, border, ...rest }) => (
            <polygon
              {...rest}
              key={rest.name}
              style={{ fill: bg, stroke: border, strokeWidth: borderSize }}
            />
          ))}
          {headquarters.map(({ bg, border, ...rest }) => (
            <circle
              {...rest}
              key={rest.name}
              stroke={border}
              strokeWidth={borderSize}
              fill={bg}
            />
          ))}
        </svg>
      </div>
    </Container>
  );
};

export default Board;
