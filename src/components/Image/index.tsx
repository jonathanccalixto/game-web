import React, { ImgHTMLAttributes } from 'react';

import { Container } from './styles';

export interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  height?: string;
  width?: string;
}

const Image: React.FC<IProps> = props => {
  const { style = {}, className, height, width, alt, ...imgProps } = props;
  const containerProps = { style, className, height, width };
  return (
    <Container {...containerProps}>
      <img alt={alt} {...imgProps} />
    </Container>
  );
};

export default Image;
