import React, { FC, useState } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import {
  Button,
  Container,
  Col,
  FormControl,
  Row,
  Image,
  Field,
} from '../../uiKit';
import Logo from '../../img/logo.png';
import Dialog from '../../uiKit/Dialog';
import { dialogFields } from '../../helpers/constants';

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
};

const DialogAddMovieActions = (
  <>
    <Button withBorder>Reset</Button>
    <Button primary>Submit</Button>
  </>
);

export const Header: FC<HeaderProps> = () => {
  const [showAddMovie, setShowAddMovie] = useState(false);

  return (
    <HeadWrapper>
      <Dialog
        title="Add movie"
        show={showAddMovie}
        setShowDialog={setShowAddMovie}
        actions={DialogAddMovieActions}
      >
        {dialogFields.map((field) => (
          <FormControl key={field.label}>
            <Field type={field.type} label={field.label} placeholder={field.placeholder} />
          </FormControl>
        ))}
      </Dialog>
      <Container>
        <Row>
          <Col width="75%">
            <Image url={Logo} width="150px" />
          </Col>
          <Col width="25%" align="right">
            <Button onClick={() => setShowAddMovie(true)}>+ add movie</Button>
          </Col>
        </Row>
        <Row margin="0 2em">
          <Col>
            <HeaderTitle>Find your movie</HeaderTitle>
          </Col>
        </Row>
        <Row margin="0 2em">
          <Col width="75%">
            <Field type="text" placeholder="What do you want to watch" />
          </Col>
          <Col width="0" margin="0 1.5em">
            <Button primary>search</Button>
          </Col>
        </Row>
      </Container>
    </HeadWrapper>
  );
};

export default Header;
