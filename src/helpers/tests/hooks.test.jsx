import React from 'react';
import { shallow } from 'enzyme';
import useToggle from '../hooks';

const HookWrapper = ({ hook }) => {
  const hookMock = hook ? hook() : undefined;
  return <div hook={hookMock} />;
};

const initValue = false;

describe('Hooks useToggle', () => {
  it('should render', () => {
    const wrapper = shallow(<HookWrapper />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should set init value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useToggle(initValue)} />);
    const { hook } = wrapper.find('div').props();
    const [val, onChange] = hook;
    const actual = { val, onChange };
    const expected = { val: false, onChange: expect.any(Function) };
    expect(actual).toEqual(expected);
  });

  it('should toggle init value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useToggle(initValue)} />);
    let { hook } = wrapper.find('div').props();
    const [, onChange] = hook;
    // run hook
    onChange();
    // get hook value
    ({ hook } = wrapper.find('div').props());
    const [val] = hook;
    const actual = val;
    const expected = !initValue;
    expect(actual).toEqual(expected);
  });
});
