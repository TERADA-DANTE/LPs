import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './index.css'
export default function () {
  return (
    <Avatar
      shape='square'
      size='large'
      // Fallback
      icon={<UserOutlined />}
      src={
        'https://avatars2.githubusercontent.com/u/55175301?s=460&u=3c5fe0537ea79625e8227084ecbf303179137433&v=4'
      }
      onClick={() => (window.location.href = 'https://github.com/TERADA-DANTE')}
    />
  )
}
