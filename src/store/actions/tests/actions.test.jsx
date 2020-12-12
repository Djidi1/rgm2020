import {
  addMovie,
  getMovie,
  getMovies,
  deleteMovie,
  editMovie,
} from '../index';

const initState = {
  type: '',
  payload: {},
};

describe('Store -> actions', () => {
  it('should return payload and ADD_MOVIE type', () => {
    const actual = addMovie({});
    const expected = { ...initState, type: 'ADD_MOVIE' };
    expect(actual).toEqual(expected);
  });
  it('should return payload and GET_MOVIES type', () => {
    const actual = getMovies({});
    const expected = { ...initState, type: 'GET_MOVIES' };
    expect(actual).toEqual(expected);
  });
  it('should return payload and GET_MOVIE type', () => {
    const actual = getMovie({});
    const expected = { ...initState, type: 'GET_MOVIE' };
    expect(actual).toEqual(expected);
  });
  it('should return payload and DELETE_MOVIE type', () => {
    const actual = deleteMovie({});
    const expected = { ...initState, type: 'DELETE_MOVIE' };
    expect(actual).toEqual(expected);
  });
  it('should return payload and EDIT_MOVIE type', () => {
    const actual = editMovie({});
    const expected = { ...initState, type: 'EDIT_MOVIE' };
    expect(actual).toEqual(expected);
  });
});
