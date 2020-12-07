import moviesReducer from '../moviesReducer';

const initState = {
  loading: false,
  movies: {},
};

describe('Store -> moviesReducer', () => {
  it('should return the initial state', () => {
    const actual = moviesReducer(undefined, {});
    const expected = { ...initState };
    expect(actual).toEqual(expected);
  });

  it('should handle GET_MOVIES', () => {
    const startAction = {
      type: 'GET_MOVIES',
    };
    const actual = moviesReducer(initState, startAction);
    const expected = { ...initState, loading: true };
    expect(actual).toEqual(expected);
  });

  it('should handle MOVIES_RECEIVED', () => {
    const successAction = {
      type: 'MOVIES_RECEIVED',
      json: 'test',
    };
    const actual = moviesReducer(initState, successAction);
    const expected = { ...initState, movies: 'test' };
    expect(actual).toEqual(expected);
  });
});
