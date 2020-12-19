import {
  Details,
  Header,
  Main,
} from './components';

import { getMovies, getMovie } from './store/actions';

import {
  Page404,
} from './pages';

export default {
  routesHeader: [
    {
      component: Header,
      path: '/',
      exact: true,
    }, {
      component: Details,
      path: '/film/:filmId',
    }, {
      component: Header,
      path: '/search/:searchQuery',
    }, {
      component: Page404,
    },
  ],
  routes: [
    {
      component: Main,
      path: '/',
      exact: true,
      fetchData({ dispatch, payload }) {
        const payloadData = {
          search: payload.search_movie,
          searchBy: 'title',
        };
        dispatch(getMovies(payloadData));
      },
    }, {
      component: Main,
      path: '/film/:filmId',
      fetchData({ dispatch, match }) {
        dispatch(getMovie(match.params));
        dispatch(getMovies());
      },
    }, {
      component: Main,
      path: '/search/:searchQuery',
    }, {
      component: Page404,
    },
  ],
};
