import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import useToggle from '../../helpers/hooks';

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
  const history = useHistory();
  const [showAddMovie, toggleShowAddMovie] = useToggle(false);
  const [searchString, setSearchString] = useState('');

  const handleSearchInput = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearch = () => {
    history.push(`/search/${searchString}`);
  };

  return (
    <HeadWrapper>
      <Dialog
        title="Add movie"
        show={showAddMovie}
        toggleShowDialog={toggleShowAddMovie}
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
            <Button onClick={toggleShowAddMovie}>+ add movie</Button>
          </Col>
        </Row>
        <Row margin="0 2em">
          <Col>
            <HeaderTitle>Find your movie</HeaderTitle>
          </Col>
        </Row>
        <Row margin="0 2em">
          <Col width="75%">
            <Field
              type="text"
              placeholder="What do you want to watch"
              value={searchString}
              onChange={handleSearchInput}
            />
          </Col>
          <Col width="0" margin="0 1.5em">
            <Button primary onClick={handleSearch}>search</Button>
          </Col>
        </Row>
      </Container>
    </HeadWrapper>
  );
};

export default Header;
