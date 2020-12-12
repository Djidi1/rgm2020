import React from 'react';
import renderer from 'react-test-renderer';
import { EditMovieComp, editMovieValidator } from '../EditMovie';

describe('EditMovie', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('is expected to render successfully', () => {
    const wrapper = renderer
      .create(<EditMovieComp movie={{}} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  describe('editMovieValidator', () => {
    it('should return errors object if title does not passed', () => {
      const values = { title: '' };
      const expected = { title: 'Required' };
      const actual = editMovieValidator(values);
      expect(actual).toEqual(expected);
    });
  });
});
