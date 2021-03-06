export const initState = {
  loading: true,
  movie: {},
  delete_loading: true,
  edit_loading: true,
  add_loading: true,
  error: '',
  messages: [],
};

type Action = {
  type: string;
  json: string;
  error: string;
};

const reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case 'GET_MOVIE':
      return { ...state, loading: true };
    case 'MOVIE_RECEIVED':
      return {
        ...state, movie: action.json, error: '', loading: false,
      };
    case 'MOVIE_NOT_FOUND':
      return { ...state, error: action.error, loading: false };
    case 'ADD_MOVIE':
      return { ...state, add_loading: true };
    case 'MOVIE_ADDED':
      return { ...state, messages: action.json, add_loading: false };
    case 'EDIT_MOVIE':
      return { ...state, edit_loading: true };
    case 'MOVIE_UPDATED':
      return { ...state, movie: action.json, edit_loading: false };
    case 'DELETE_MOVIE':
      return { ...state, delete_loading: true };
    case 'MOVIE_DELETED':
      return { ...state, movie: action.json, delete_loading: false };
    default:
      return state;
  }
};
export default reducer;
