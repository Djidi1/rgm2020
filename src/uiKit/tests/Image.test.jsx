import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../Image';

describe('UI-Kit Image', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('is expected to render successfully', () => {
    const wrapper = renderer
      .create(<Image />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('is expected to render successfully with params', () => {
    const wrapper = renderer
      .create(<Image width={100} height={100} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
