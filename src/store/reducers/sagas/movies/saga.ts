import { put, takeEvery } from 'redux-saga/effects';

const backEndURL = 'http://localhost:4000';

function* fetchMovies(data) {
  // const {
  //   genre,
  //   sortBy,
  //   search,
  //   searchBy,
  // } = data.payload;
  console.log('GET_MOVIES_2');
  // const limitRequest = '?limit=10';
  // const searchFilter = !search ? '' : `&searchBy=${searchBy}&search=${search}`;
  // const genreFilter = `&filter=${genre}`;
  // const sortByFilter = `&sortBy=${sortBy}&sortOrder=desc`;
  // const json = yield fetch(`${backEndURL}/movies${limitRequest}${searchFilter}${genreFilter}${sortByFilter}`)
  //   .then((response) => response.json());
  yield put({ type: 'MOVIES_RECEIVED', json: data });
}

export function* moviesSaga() {
  console.log('GET_MOVIES');
  yield takeEvery('GET_MOVIES', fetchMovies);
}
