import React from 'react';
import renderer from 'react-test-renderer';
import Popup from '../Popup';

describe('UI-Kit Popup', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('is expected to render successfully', () => {
    const wrapper = renderer
      .create(<Popup />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
