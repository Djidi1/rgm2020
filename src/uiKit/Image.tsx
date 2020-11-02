import React, { FC } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

interface ImageProps {
  width?: string,
  height?: string,
}

type MainProps = {
  url: string,
};

const image: FC<MainProps> = ({ url, ...props }) => (
  <LazyLoad height={320}>
    <img src={url} alt="img" {...props} />
  </LazyLoad>
);

const Image = styled(image)<ImageProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
`;

export default Image;
