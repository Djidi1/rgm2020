import React from 'react';
import renderer from 'react-test-renderer';
import Col from '../Col';

describe('UI-Kit Col', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('is expected to render successfully', () => {
    const wrapper = renderer
      .create(<Col />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
