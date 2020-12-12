import { Typography } from 'antd'
import Divider from 'components/atoms/Divider/index'

import './index.css'
const { Title, Paragraph } = Typography

export default function ({ title, paragraph }) {
  return (
    <article>
      <Title>{title}</Title>
      <Divider />
      <Paragraph>
        <blockquote>{paragraph}</blockquote>
      </Paragraph>
    </article>
  )
}
