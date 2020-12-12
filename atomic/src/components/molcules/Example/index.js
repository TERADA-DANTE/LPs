//import Alert from 'components/atoms/Alert/index'
import Tree from 'components/atoms/Tree/index'
import { Divider, Typography } from 'antd'
import { CarryOutOutlined } from '@ant-design/icons'

import './index.css'

export default function () {
  // heck implied
  //const [message, type, showicon] = ['これはあくまでも例です😀', 'info', true]
  const { Title } = Typography
  const title = 'Atomic Design Example'
  const treeData = [
    {
      title: 'src/components',
      key: '0-0',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'atoms',
          key: '0-0-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: 'Avatar',
              key: '0-0-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: 'Button',
              key: '0-0-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        },
        {
          title: 'molcules',
          key: '0-0-1',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: 'Navigation',
              key: '0-0-1-0',
              icon: <CarryOutOutlined />
            },
            {
              title: 'Form',
              key: '0-0-1-1',
              icon: <CarryOutOutlined />
            }
          ]
        },
        {
          title: 'organisms',
          key: '0-0-2',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: 'Header',
              key: '0-0-2-0',
              icon: <CarryOutOutlined />
            },
            {
              title: 'Hero',
              key: '0-0-2-1',
              icon: <CarryOutOutlined />
            }
          ]
        },
        {
          title: 'templates',
          key: '0-0-3',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: 'GenericTemplate',
              key: '0-0-3-0',
              icon: <CarryOutOutlined />
            },
            {
              title: 'PageTemplate',
              key: '0-0-3-1',
              icon: <CarryOutOutlined />
            }
          ]
        },
        {
          title: 'pages',
          key: '0-0-4',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: 'Homepage',
              key: '0-0-4-0',
              icon: <CarryOutOutlined />
            },
            {
              title: 'SimplePage',
              key: '0-0-4-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    }
  ]
  return (
    <article>
      <br />
      <Title>{title}</Title>
      <Divider />
      {/* <Alert message={message} type={type} showIcon={showicon} /> */}
      <Tree
        treeData={treeData}
        showLine={true}
        showIcon={false}
        showLeafIcon={true}
      />
    </article>
  )
}
