import React, { FC } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import {
  Container,
  Col,
  Row,
  Image,
} from '../../uiKit';
import Logo from '../../img/logo.png';

const DetailsWrapper = styled.div`
  background: grey;
  padding: 0.25em 1em;
  display: flex;
  justify-content: space-between;
  height: 15em;
`;

const DetailsTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: normal;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  background: #607D8B;
  flex: 1 0 100%;
  border: 1px solid grey;
  height: 20em;
  margin-bottom: 1em;
`;

type DetailsProps = {
};

export const Details: FC<DetailsProps> = () => (
  <DetailsWrapper>
    <Container>
      <Row>
        <Col width="75%">
          <Image url={Logo} width="150px" />
        </Col>
        <Col width="25%" align="right">
          1
        </Col>
      </Row>
      <Row margin="0 2em">
        <Col width="25%">
          <ImageWrapper>
            image
          </ImageWrapper>
        </Col>
        <Col width="75%">
          <DetailsTitle>Pulp Fiction</DetailsTitle>
          <div>Oscar winning movie</div>
          <div>1994 154 min</div>
          <div>Description about movie</div>
        </Col>
      </Row>
    </Container>
  </DetailsWrapper>
);

export default Details;
