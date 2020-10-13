import React, { FC } from 'react';
import styled from 'styled-components';

import {
  Image,
} from '../../uiKit';
import Logo from '../../img/logo.png';

const FooterWrapper = styled.div`
  padding: 1em;
  text-align: center;
`;

type FooterProps = {
}

export const Footer: FC<FooterProps> = () => (
  <FooterWrapper>
    <Image url={Logo} width='150px' />
  </FooterWrapper>
);

export default Footer;
