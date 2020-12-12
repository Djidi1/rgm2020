import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row';

describe('UI-Kit Row', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('is expected to render successfully', () => {
    const wrapper = renderer
      .create(<Row />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
