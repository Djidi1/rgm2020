import React, { FC, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import DialogAddMovie from './AddMovie';
import {
  Button,
  Container,
  Col,
  Row,
  Image,
  Field,
} from '../../uiKit';
import Logo from '../../img/logo.png';
// import useToggle from '../../helpers/hooks';

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

export const Header: FC = () => {
  const history = useHistory();
  const { searchQuery } = useParams();
  const [showAddMovie, toggleShowAddMovie] = useState(false);

  const initValues = {
    search_movie: searchQuery,
  };

  const searchMovieValidator = (values) => {
    const errors: {search_movie?: string} = {};
    if (!values.search_movie) {
      errors.search_movie = 'Required field';
    }
    return errors;
  };

  const searchMovieOnSubmit = (values) => {
    history.push(`/search/${values.search_movie || ''}`);
  };

  return (
    <HeadWrapper>
      <DialogAddMovie
        showAddMovie={showAddMovie}
        toggleShowAddMovie={() => toggleShowAddMovie(false)}
      />
      <Container>
        <Row>
          <Col width="75%">
            <Link to="/">
              <Image url={Logo} width="150px" />
            </Link>
          </Col>
          <Col width="25%" align="right">
            <Button onClick={() => toggleShowAddMovie(true)}>+ add movie</Button>
          </Col>
        </Row>
        <Row margin="0 2em">
          <Col>
            <HeaderTitle>Find your movie</HeaderTitle>
          </Col>
        </Row>
        <Formik
          enableReinitialize
          initialValues={initValues}
          validate={searchMovieValidator}
          onSubmit={searchMovieOnSubmit}
        >
          {() => (
            <Form>
              <Row margin="0 2em">
                <Col width="75%">
                  <Field
                    formik
                    type="text"
                    name="search_movie"
                    placeholder="What do you want to watch"
                  />
                  <ErrorMessage name="search_movie" component="div" />
                </Col>
                <Col width="0" margin="0 1.5em">
                  <Button primary type="submit">Search</Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </HeadWrapper>
  );
};

export default Header;
