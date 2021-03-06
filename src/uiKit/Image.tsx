import React, { FC } from 'react';
// import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import no_picture from '../img/No_Picture.jpg';

export interface ImageProps {
  width?: string,
  height?: string,
}

type MainProps = {
  url: string,
  width?: string,
  height?: string,
};

const image: FC<MainProps> = ({ url, width = '100%', height = 'auto' }) => <img src={url} alt="img" width={width} height={height} />

// return (
//   <LazyLoad height={320}>
//     <img src={url} alt="img" onError={addDefaultSrc} {...props} />
//   </LazyLoad>
// );

const Image = styled(image)<ImageProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
`;

export default Image;
