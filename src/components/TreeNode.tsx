import React from 'react';
import { Node } from '../services/Tree';
import styles from './TreeNode.module.scss';
import classnames from 'classnames';

export interface TreeNodeType {
  node: Node;
  level: number;
  path: string;
  openedNodesKeys: string[];
  onToggle: (key: string) => void;
  onSelect: (path: string, key: string) => void;
  selectedNodeKey: string;
}

type TreeNodeProps = TreeNodeType;
export const TreeNode: React.FunctionComponent<TreeNodeProps> = (props) => {
  const {
    node,
    level,
    path,
    openedNodesKeys,
    onToggle,
    onSelect,
    selectedNodeKey
  } = props;

  const isNodeOpened = ():boolean => {
    return openedNodesKeys.includes(node.key);
  }

  const getPaddingLeft = () => {
    let paddingLeft = level * 20;
    return { paddingLeft: paddingLeft };
  }
  return(
    <React.Fragment>
      <div
        className={classnames(
          styles.nodeItem,
          {[styles.active]: node.key === selectedNodeKey},
        )}
        style={getPaddingLeft()}
      >
        <div className={styles.nodeIcon} onClick={() => onToggle(node.key)}>
          {isNodeOpened() ? '-' : '+'}
        </div>
        <div className={styles.nodeName} onClick={() => onSelect(path, node.key)}>
          {node.name}
        </div>
      </div>
      {isNodeOpened() && node.nodes.map((child: Node, index) => (
        <TreeNode
          {...props}
          key={index}
          node={child}
          level={level +  1}
          path={`${path}/${child.name}`}
        />
      ))}
    </React.Fragment>
  );
}

export default TreeNode;
