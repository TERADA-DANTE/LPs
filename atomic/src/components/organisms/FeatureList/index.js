import { Divider, Typography } from 'antd'
import Cards from 'components/molcules/Cards/index'
import styled from 'styled-components'

const Wrapper = styled.div`
  @media screen and (max-width: 960px) {
    width: 100vw;
  }
  @media screen and (min-width: 960px) {
    width: 960px;
  }
  padding: 16px 24px;
`

const { Title } = Typography
const FeatureList = () => {
  return (
    <Wrapper>
      <Title>Atomic Design Features</Title>
      <Divider />
      <Cards />
    </Wrapper>
  )
}
export default FeatureList
