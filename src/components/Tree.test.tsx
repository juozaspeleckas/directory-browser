import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Tree from './Tree';

describe('<Tree />', () => {
  let component: () => ShallowWrapper;
  const curriedComponent = () => () => shallow(<Tree/>);

  beforeEach(() => {
    component = curriedComponent();
  });
  it('render without crashing', () => {
    const wrapper = component();
    expect(wrapper.exists()).toEqual(true);
  });
});