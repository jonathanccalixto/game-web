import chroma from 'chroma-js';

type IColorParam = string | [string, number];

type IColorVar = (
  name: string,
  font: IColorParam,
  bg?: IColorParam,
  border?: IColorParam,
) => string;

const buildVars = (name: string, tone: string, alpha = 1): string[] => {
  const color = chroma(tone);
  const [red, green, blue] = color.rgba();

  return [
    `--${name}-base: ${red}, ${green}, ${blue};`,
    `--${name}-alpha: ${alpha};`,
    `--${name}: rgba(var(--${name}-base), var(--${name}-alpha));`,
  ];
};

export const colorVar: IColorVar = (name, font, bg, border) => {
  const colorVars = [
    [name, font],
    [`ft-${name}`, font],
    [`bg-${name}`, bg],
    [`border-${name}`, border],
  ].reduce((memo: string[], [varName, tone]): string[] => {
    if (!tone) return memo;

    const [color, alpha] = tone instanceof Array ? tone : [tone, 1];
    const vars = buildVars(varName as string, color, alpha);

    return [...memo, ...vars];
  }, [] as string[]);

  return colorVars.join('\n');
};
