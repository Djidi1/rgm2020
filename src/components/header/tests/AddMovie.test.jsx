import React from 'react';
import renderer from 'react-test-renderer';
import { AddMovie, addMovieValidator } from '../AddMovie';

describe('AddMovie', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('is expected to render successfully', () => {
    const wrapper = renderer
      .create(<AddMovie />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  // it('is expected to ...', async () => {
  //   const mockAddMovieData = jest.fn();
  //   const wrapper = mount(<AddMovie addMovieData={mockAddMovieData} />);
  //   const form = wrapper.find('form');
  //   form.simulate('submit', { preventDefault: () => {} });
  //   expect(mockAddMovieData).toBeCalledWith({});
  // });

  describe('addMovieValidator', () => {
    it('should return errors object if title does not passed', () => {
      const values = { title: '' };
      const expected = { title: 'Required' };
      const actual = addMovieValidator(values);
      expect(actual).toEqual(expected);
    });
  });
});
