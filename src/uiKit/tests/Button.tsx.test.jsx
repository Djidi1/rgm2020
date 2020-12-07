import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('UI-Kit Button', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('is expected to render successfully', () => {
    const wrapper = renderer
      .create(<Button />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('is expected to render successfully with params', () => {
    const wrapper = renderer
      .create(<Button primary withBorder />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
