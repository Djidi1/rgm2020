/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const getMovies = (payload) => ({
  type: 'GET_MOVIES',
  payload,
});

export const getMovie = (payload) => ({
  type: 'GET_MOVIE',
  payload,
});

export const addMovie = (payload) => ({
  type: 'ADD_MOVIE',
  payload,
});

export const deleteMovie = (payload) => ({
  type: 'DELETE_MOVIE',
  payload,
});

export const editMovie = (payload) => ({
  type: 'EDIT_MOVIE',
  payload,
});
