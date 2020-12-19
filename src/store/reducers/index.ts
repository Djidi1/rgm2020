import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';

const createRootReducer = (history: History) => combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  router: connectRouter(history),
});

export default createRootReducer;
