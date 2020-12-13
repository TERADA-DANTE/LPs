import { Collapse } from 'antd'
const { Panel } = Collapse

export default function ({ profile }) {
  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header='Thank you for reading!' key='1'>
        {profile}
      </Panel>
    </Collapse>
  )
}
