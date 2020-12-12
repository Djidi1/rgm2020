import React from 'react';
import { connect } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import { editMovie } from '../../store/actions';
import { dialogFields } from '../../helpers/constants';
import {
  Button, Dialog, Field, FormControl,
} from '../../uiKit';

export const editMovieValidator = (values: {title: string}): {title?: string} => {
  const errors: {title?: string} = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  return errors;
};

export const EditMovieComp = ({
  movie, showAddMovie, toggleShowAddMovie, editMovieData,
}) => {
  const initValues = {
    id: movie.id,
    title: movie.title,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    genres: movie.genres,
    overview: movie.overview,
    runtime: movie.runtime,
  };

  const editMovieOnSubmit = (values, { setSubmitting }) => {
    editMovieData(values).finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <Dialog
      title="Edit movie"
      show={showAddMovie}
      toggleShowDialog={toggleShowAddMovie}
    >
      <Formik
        enableReinitialize
        initialValues={initValues}
        validate={editMovieValidator}
        onSubmit={editMovieOnSubmit}
      >
        {({ isSubmitting, submitForm }) => (
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
            <Button primary disabled={isSubmitting} type="button" onClick={submitForm}>Submit</Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

const mapDispatchToProps = {
  editMovieData: editMovie,
};

const mapStateToProps = ({ movie }) => ({
  movie: movie.movie,
  edit_loading: movie.edit_loading,
  error: movie.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieComp);
