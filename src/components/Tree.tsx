import React from 'react';
import TreeNode from './TreeNode';
import { Node, TreeData, getTreeData } from '../services/Tree';
import styles from './Tree.module.scss';


interface TreeProps {
  treeData?: TreeData;
}

const Tree: React.FunctionComponent<TreeProps> = (props) => {
  const [openedNodesKeys, setOpenedNodesKeys] = React.useState<string[]>([]);
  const [selectedNodePath, setSelectedNodePath] = React.useState<string>('/');
  const [selectedNodeKey, setSelectedNodeKey] = React.useState<string>('');
  const [data, setData] = React.useState<TreeData>({nodes: []});


  // const temptreeData = React.useRef(await axios.get('http://www.mocky.io/v2/5d01aafa3100006600ab2980'));
  React.useEffect(
    () => {
      const fetchData = async () => {
          const result =  await getTreeData();
          // setData(result.data);
          setData(result);
      };
      fetchData();
    },
    [data],
  );

  const onToggle = (nodeKey: string) => {
    const newOpenedNodesKeys = openedNodesKeys.includes(nodeKey)
      ? openedNodesKeys.filter((key: string) => key !== nodeKey)
      : [...openedNodesKeys, nodeKey];
    setOpenedNodesKeys(newOpenedNodesKeys);
  }

  const onSelect = (nodePath: string, nodeKey: string) => {
    setSelectedNodePath(nodePath);
    setSelectedNodeKey(nodeKey);
  }
  return (
    <div className={styles.directoryBrowserContainer}>
      <div>
        <div className={styles.label}>This is your selected directory path:</div>
        <div className={styles.selectedNode}>{selectedNodePath}</div>
      </div>
      <div className={styles.directories}>
        { data && data.nodes.map((node: Node, index) => (
          <TreeNode
            key={index}
            node={node}
            level={0}
            path={`/${node.name}`}
            onToggle={onToggle}
            openedNodesKeys={openedNodesKeys}
            onSelect={onSelect}
            selectedNodeKey={selectedNodeKey}
          />
        ))}
      </div>
    </div>
  )
}

export default Tree;
