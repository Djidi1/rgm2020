import {
  Details,
  Header,
  Main,
} from './components';

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
    }, {
      component: Main,
      path: '/film/:filmId',
    }, {
      component: Main,
      path: '/search/:searchQuery',
    }, {
      component: Page404,
    },
  ],
};
