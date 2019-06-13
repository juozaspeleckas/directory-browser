import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TreeNode, TreeNodeType } from './TreeNode';
import { Node } from '../services/Tree';
import styles from './TreeNode.module.scss';

describe('<TreeNode />', () => {
  let defaultProps: TreeNodeType;
  let component: () => ShallowWrapper;
  const curriedComponent = (props: TreeNodeType) => () => shallow(<TreeNode {...props} />);

  beforeEach(() => {
    const mockNode: Node = {
      name: 'test',
      key: 'test',
      nodes: [],
    }
    defaultProps = {
      node: mockNode,
      level: 0,
      path: 'test',
      openedNodesKeys: [],
      onToggle: jest.fn(),
      onSelect: jest.fn(),
      selectedNodeKey: '',
    }
    component = curriedComponent(defaultProps);
  });
  it('render without crashing', () => {
    const wrapper = component();
    expect(wrapper.exists()).toEqual(true);
  });
  it('render correct class by selectedNodeKey', () => {
    const wrapper = component();
    expect(wrapper.find(`.${styles.nodeItem}`).hasClass(styles.active)).toBe(false);
    wrapper.setProps({ selectedNodeKey: 'test'});
    expect(wrapper.find(`.${styles.nodeItem}`).hasClass(styles.active)).toBe(true);
  });
  it('render correct icon', () => {
    const wrapper = component();
    expect(wrapper.find(`.${styles.nodeIcon}`).text()).toEqual('+');
    wrapper.setProps({ openedNodesKeys: ['test']});
    expect(wrapper.find(`.${styles.nodeIcon}`).text()).toEqual('-');
  });
});