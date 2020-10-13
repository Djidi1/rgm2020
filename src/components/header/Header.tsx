import React, { FC } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import {
  Button,
  Container,
  Col,
  Row,
  Image,
  Input,
} from '../../uiKit';
import Logo from '../../img/logo.png';

const HeadWrapper = styled.div`
  background: grey;
  padding: 0.25em 1em;
  display: flex;
  justify-content: space-between;
  height: 15em;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: normal;
`;

type HeaderProps = {
}

export const Header: FC<HeaderProps> = () => (
  <HeadWrapper>
    <Container>
      <Row>
        <Col width="75%">
          <Image url={Logo} width='150px' />
        </Col>
        <Col width="25%" align="right">
          <Button>+ add movie</Button>
        </Col>
      </Row>
      <Row margin="0 2em">
        <Col>
          <HeaderTitle>Find your movie</HeaderTitle>
        </Col>
      </Row>
      <Row margin="0 2em">
        <Col width="75%">
          <Input type="text" placeholder="What do you want to watch" />
        </Col>
        <Col width="0" margin="0 1.5em">
          <Button primary>search</Button>
        </Col>
      </Row>
    </Container>
  </HeadWrapper>
);

export default Header;
