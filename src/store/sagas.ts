import {
  put,
  takeLatest,
  takeEvery,
  all,
} from 'redux-saga/effects';
import fetch from 'node-fetch';

const backEndURL = 'http://localhost:4000';

function* fetchMovies(data) {
  const {
    genre,
    sortBy,
    search,
    searchBy,
  } = data.payload || {};
  const limitRequest = '?limit=10';
  const searchFilter = !search ? '' : `&searchBy=${searchBy}&search=${search}`;
  const genreFilter = genre ? `&filter=${genre}` : '';
  const sortByFilter = sortBy ? `&sortBy=${sortBy}&sortOrder=desc` : '';
  const json = yield fetch(`${backEndURL}/movies${limitRequest}${searchFilter}${genreFilter}${sortByFilter}`)
    .then((response) => response.json());
  yield put({ type: 'MOVIES_RECEIVED', json });
}

function* getMovie(data) {
  const filmId = data.payload.filmId || data.payload.id;
  try {
    const json = yield fetch(`${backEndURL}/movies/${filmId}`)
      .then((response) => response.json());
    yield put({ type: 'MOVIE_RECEIVED', json });
  } catch {
    yield put({ type: 'MOVIE_NOT_FOUND', error: 'Movie not found' });
  }
}

function* addMovie(data) {
  const { payload } = data;
  const json = yield fetch(`${backEndURL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json());
  yield put({ type: 'MOVIE_ADDED', json });
}

function* editMovie(data) {
  const { payload } = data;
  const json = yield fetch(`${backEndURL}/movies`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json());
  yield put({ type: 'MOVIE_UPDATED', json });
}

function* deleteMovie(data) {
  const { id } = data.payload;
  const json = yield fetch(`${backEndURL}/movies/${id}`, { method: 'DELETE' })
    .then((response) => response.json());
  yield put({ type: 'MOVIE_DELETED', json });
}

function* actionWatcher() {
  yield takeLatest('GET_MOVIES', fetchMovies);
  yield takeEvery('GET_MOVIE', getMovie);
  yield takeEvery('ADD_MOVIE', addMovie);
  yield takeEvery('DELETE_MOVIE', deleteMovie);
  yield takeEvery('EDIT_MOVIE', editMovie);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
