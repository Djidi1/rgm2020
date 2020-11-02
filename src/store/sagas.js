import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchMovies() {
  const json = yield fetch('http://localhost:4000/movies?limit=10')
    .then((response) => response.json());
  yield put({ type: 'MOVIES_RECEIVED', json });
}
function* actionWatcher() {
  yield takeLatest('GET_MOVIES', fetchMovies);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
