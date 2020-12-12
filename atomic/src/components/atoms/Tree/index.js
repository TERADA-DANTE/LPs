import { Tree } from 'antd'

export default function ({ treeData, showLine, showIcon, showLeafIcon }) {
  // const onSelect = (selectedKeys, info) => {
  //   console.log('selected', selectedKeys, info)
  // }

  return (
    <Tree
      showLine={showLine}
      showIcon={showIcon}
      showLeafIcon={showLeafIcon}
      defaultExpandedKeys={['0-0-0']}
      // onSelect={onSelect}
      treeData={treeData}
    />
  )
}
