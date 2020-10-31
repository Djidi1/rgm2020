import React, { FC } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';

interface ImageProps {
  width?: string,
  height?: string,
}

type MainProps = {
  url: string,
};

const image: FC<MainProps> = ({ url, ...props }) => <img src={url} alt="img" {...props} />;

const Image = styled(image)<ImageProps>`
  width: ${({ width }) => width || 'initial'};
  height: ${({ height }) => height || 'initial'};
`;

export default Image;
