import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import { addMovie } from '../../store/actions';
import { dialogFields } from '../../helpers/constants';
import {
  Button, Dialog, Field, FormControl,
} from '../../uiKit';

export const addMovieValidator = (values: {title: string}): {title?: string} => {
  const errors: {title?: string} = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  return errors;
};

type AddMovieProps = {
  showAddMovie: boolean;
  toggleShowAddMovie: () => void;
  addMovieData: (object) => { finally: (object) => void };
};

export const AddMovie: FC<AddMovieProps> = ({ showAddMovie, toggleShowAddMovie, addMovieData }) => {
  const initValues = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: '',
  };

  const addMovieOnSubmit = (values, { setSubmitting }) => {
    addMovieData(values).finally(() => { setSubmitting(false); });
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
            {dialogFields.map((field, index) => (
              <FormControl key={field.label || index}>
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

const mapDispatchToProps = {
  addMovieData: addMovie,
};

const mapStateToProps = ({ movie }) => ({
  movie: movie.movie,
  add_loading: movie.add_loading,
  error: movie.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
