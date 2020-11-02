/* eslint-disable prettier/prettier */
import React from 'react';

import {buildFields, buildFinishFields } from './constants'
import { Container, Field } from './styles';

const fields = buildFields()
const finishFields = buildFinishFields()

const Board: React.FC = () => {
  return (
    <Container>
      <div>
        <svg>
          {fields.map(({name, bg, border, x, y }) => (
            <Field key={name} name={name} fill={bg} x={x} y={y} stroke={border} />
          ))}
          {finishFields.map(({name, points, bg, border}) => (
            <polygon
              key={name}
              name={name}
              points={points}
              style={{ fill: bg, stroke: border, strokeWidth:2 }}
            />
          ))}
        </svg>
      </div>
    </Container>
  );
};

export default Board;
