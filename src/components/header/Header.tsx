import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { addMovie } from '../../store/actions';
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

const DialogAddMovieActions = ({ disabled }) => (
  <>
    <Button withBorder type="reset">Reset</Button>
    <Button primary disabled={disabled} type="submit">Submit</Button>
  </>
);

const initValues = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: '',
  overview: '',
  runtime: '',
};

const mapDispatchToProps = {
  addMovieData: addMovie,
};

const mapStateToProps = ({ movie }) => ({
  movie: movie.movie,
  add_loading: movie.add_loading,
  error: movie.error,
});

const DialogAddMovie = connect(mapStateToProps, mapDispatchToProps)(
  ({ showAddMovie, toggleShowAddMovie, addMovieData }) => (
    <Dialog
      title="Add movie"
      show={showAddMovie}
      toggleShowDialog={toggleShowAddMovie}
    >
      <Formik
        enableReinitialize
        initialValues={initValues}
        validate={(values) => {
          const errors: {title?: string} = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          addMovieData(values).then(() => {
            setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {dialogFields.map((field) => (
              <FormControl key={field.label}>
                <Field
                  formik
                  type={field.type}
                  name={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                />
                <ErrorMessage name={field.name} component="div" />
              </FormControl>
            ))}
            <DialogAddMovieActions disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Dialog>
  ),
);

export const Header: FC = () => {
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
      <DialogAddMovie showAddMovie={showAddMovie} toggleShowAddMovie={toggleShowAddMovie} />
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
