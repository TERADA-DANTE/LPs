import { Card, Avatar } from 'antd'
import { useState } from 'react'
const { Meta } = Card

export default function ({ src, title, description }) {
  // How to use..?
  //const [isLoading, setIsLoading] = useState(false)

  return (
    <Card style={{ width: 300, marginTop: 16, height: '100%' }} loading={false}>
      <Meta
        avatar={<Avatar src={src} />}
        title={title}
        description={description}
      />
    </Card>
  )
}
