import React from 'react';
import { connect } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import { addMovie } from '../../store/actions';
import { dialogFields } from '../../helpers/constants';
import {
  Button, Dialog, Field, FormControl,
} from '../../uiKit';

const mapDispatchToProps = {
  addMovieData: addMovie,
};

const mapStateToProps = ({ movie }) => ({
  movie: movie.movie,
  add_loading: movie.add_loading,
  error: movie.error,
});

const AddMovie = ({ showAddMovie, toggleShowAddMovie, addMovieData }) => {
  const initValues = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: '',
  };

  const addMovieValidator = (values) => {
    const errors: {title?: string} = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    return errors;
  };

  const addMovieOnSubmit = (values, { setSubmitting }) => {
    addMovieData(values).finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <Dialog
      title="Add movie"
      show={showAddMovie}
      toggleShowDialog={toggleShowAddMovie}
    >
      <Formik
        enableReinitialize
        initialValues={initValues}
        validate={addMovieValidator}
        onSubmit={addMovieOnSubmit}
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
                  options={field.options}
                />
                <ErrorMessage name={field.name} component="div" />
              </FormControl>
            ))}
            <Button withBorder type="reset">Reset</Button>
            <Button primary disabled={isSubmitting} type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
