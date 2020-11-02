interface IField {
  name: string;
  x: string;
  y: string;
  bg: string;
  border: string;
}
interface IFinishField {
  name: string;
  points: string;
  bg: string;
  border: string;
}

const colors: string[] = ['yellow', '#65a7dd', '#f81404', '#75ad5b'];
const border = 'black';
const bg = 'white';
const size = 38;
const init = 2;
const sizeP5 = `${init + 5 * size}`;
const sizeP6 = `${init + 6 * size}`;
const sizeP7 = `${init + 7 * size}`;
const sizeP75 = `${init + 7.5 * size}`;
const sizeP8 = `${init + 8 * size}`;
const sizeP9 = `${init + 9 * size}`;

export const buildFields = (): IField[] => {
  const fields: IField[] = [];

  fields[48] = { name: '49', x: sizeP5, y: sizeP5, bg, border };
  fields[6] = { name: '7', x: sizeP9, y: sizeP5, bg, border };
  fields[34] = { name: '35', x: sizeP5, y: sizeP9, bg, border };
  fields[20] = { name: '21', x: sizeP9, y: sizeP9, bg, border };

  for (let index = 0; index < 6; index += 1) {
    const y = `${init + index * size}`;
    const color = colors[0];

    const data: Array<[number, string, string]> = [
      [54 - index, sizeP6, bg],
      [55 + index, sizeP7, index > 0 ? color : bg],
      [index, sizeP8, bg],
    ];

    data.forEach(([pos, x, bgColor]) => {
      fields[pos] = { name: `${pos + 1}`, x, y, bg: bgColor, border };
    });
  }

  for (let index = 0; index < 6; index += 1) {
    const x = `${init + (index + 9) * size}`;
    const color = colors[1];

    const data: Array<[number, string, string]> = [
      [7 + index, sizeP6, bg],
      [index < 5 ? 65 - index : 13, sizeP7, index < 5 ? color : bg],
      [19 - index, sizeP8, bg],
    ];

    data.forEach(([pos, y, bgColor]) => {
      fields[pos] = { name: `${pos + 1}`, x, y, bg: bgColor, border };
    });
  }

  for (let index = 0; index < 6; index += 1) {
    const y = `${init + (index + 9) * size}`;
    const color = colors[2];

    const data: Array<[number, string, string]> = [
      [21 + index, sizeP8, bg],
      [index < 5 ? 70 - index : 27, sizeP7, index < 5 ? color : bg],
      [33 - index, sizeP6, bg],
    ];

    data.forEach(([pos, x, bgColor]) => {
      fields[pos] = { name: `${pos + 1}`, x, y, bg: bgColor, border };
    });
  }

  for (let index = 0; index < 6; index += 1) {
    const x = `${init + index * size}`;
    const color = colors[3];

    const data: Array<[number, string, string]> = [
      [42 + index, sizeP6, bg],
      [index > 0 ? 71 + index : 41, sizeP7, index > 0 ? color : bg],
      [40 - index, sizeP8, bg],
    ];

    data.forEach(([pos, y, bgColor]) => {
      fields[pos] = { name: `${pos + 1}`, x, y, bg: bgColor, border };
    });
  }

  return fields;
};

export const buildFinishFields = (): IFinishField[] => {
  const fields: IFinishField[] = [
    {
      name: 'f1',
      points: `${sizeP6},${sizeP6} ${sizeP9},${sizeP6} ${sizeP75},${sizeP75}`,
      bg: colors[0],
      border,
    },
    {
      name: 'f2',
      points: `${sizeP9},${sizeP6} ${sizeP9},${sizeP9} ${sizeP75},${sizeP75}`,
      bg: colors[1],
      border,
    },
    {
      name: 'f3',
      points: `${sizeP9},${sizeP9} ${sizeP6},${sizeP9} ${sizeP75},${sizeP75}`,
      bg: colors[2],
      border,
    },
    {
      name: 'f4',
      points: `${sizeP6},${sizeP9} ${sizeP6},${sizeP6} ${sizeP75},${sizeP75}`,
      bg: colors[3],
      border,
    },
  ];

  return fields;
};
