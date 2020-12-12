import Step from 'components/atoms/Step/index'
import { Typography, Divider } from 'antd'
export default function () {
  const { Title } = Typography
  return (
    <article>
      <Title>Atomic Design Guide</Title>
      <Divider />
      <Step />
    </article>
  )
}
