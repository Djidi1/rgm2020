import { RouterState } from 'connected-react-router';
import { State } from 'history';
import { initState as movie } from './reducers/movieReducer';
import { initState as movies } from './reducers/moviesReducer';

export const getInitialState = (pathname = '/'): State => ({
  movie,
  movies,
  router: {
    location: {
      pathname, search: '', hash: '', key: '',
    },
    action: 'POP',
  } as RouterState,
});
