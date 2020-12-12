import { Typography } from 'antd'
import Divider from 'components/atoms/Divider/index'

const { Title, Paragraph } = Typography

export default function ({ title, paragraph }) {
  return (
    <>
      <Title>{title}</Title>
      <Divider />
      <Paragraph>
        <blockquote>{paragraph}</blockquote>
      </Paragraph>
    </>
  )
}
