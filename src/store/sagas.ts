import {
  put,
  takeLatest,
  takeEvery,
  all,
} from 'redux-saga/effects';

const backEndURL = 'http://localhost:4000';

function* fetchMovies(data) {
  const { genre, sortBy } = data.payload;
  const limitRequest = '?limit=10';
  const genreFilter = `&searchBy=genres&filter=${genre}`;
  const sortByFilter = `&sortBy=${sortBy}&sortOrder=desc`;
  const json = yield fetch(`${backEndURL}/movies${limitRequest}${genreFilter}${sortByFilter}`)
    .then((response) => response.json());
  yield put({ type: 'MOVIES_RECEIVED', json });
}

function* getMovie(data) {
  const { id } = data.payload;
  const json = yield fetch(`${backEndURL}/movies/${id}`)
    .then((response) => response.json());
  yield put({ type: 'MOVIE_RECEIVED', json });
}

function* addMovie(data) {
  const json = yield fetch(`${backEndURL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json());
  yield put({ type: 'MOVIE_ADDED', json });
}

function* editMovie(data) {
  const json = yield fetch(`${backEndURL}/movies`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
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
