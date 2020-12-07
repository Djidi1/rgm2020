import React from 'react';
import renderer from 'react-test-renderer';
import { AddMovie } from '../AddMovie';

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
});
