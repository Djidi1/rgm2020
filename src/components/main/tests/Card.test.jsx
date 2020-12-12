import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from '../Card';

describe('AddMovie', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('is expected to render successfully', () => {
    const movie = { genres: [], release_date: '' };
    const wrapper = shallow(<Card movie={movie} />);
    const actual = toJson(wrapper);
    expect(actual).toMatchSnapshot();
  });
});
