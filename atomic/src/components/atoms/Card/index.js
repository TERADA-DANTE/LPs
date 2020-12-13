import { Card, Avatar } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'

const { Meta } = Card

export default function ({img, avatar }) {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt={img.alt}
          src={img.src}
        />
      }
      actions={[
        <SettingOutlined key='setting' />,
        <EditOutlined key='edit' />,
        <EllipsisOutlined key='ellipsis' />
      ]}
    >
      <Meta
        avatar={
          <Avatar src={avatar.src} />
        }
        title={avatar.title}
        description={avatar.description}
      />
    </Card>
  )
}
