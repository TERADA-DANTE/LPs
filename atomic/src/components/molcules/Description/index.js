import { Typography, Divider } from 'antd'

const { Title, Paragraph } = Typography

export default function ({ title, paragraph }) {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>
        <blockquote>{paragraph}</blockquote>
      </Paragraph>
    </>
  )
}
