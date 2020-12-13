import Card from 'components/atoms/Card/index'
import { Row, Col } from 'antd'

import './index.css'

export default function () {
  const items = [
    {
      src:
        'https://avatars3.githubusercontent.com/u/3068563?s=460&u=aff870adf52257792263f2b806efabdf6a50227e&v=4',
      title: 'Diego Haz',
      description: (
        <>
          <strong>arc</strong>
          <br />
          https://github.com/diegohaz/arc
        </>
      )
    },
    {
      src:
        'https://avatars0.githubusercontent.com/u/4838076?s=460&u=4a6e83e27f793352a773920255ec23af710dc3aa&v=4',
      title: 'Danilo Woznica',
      description: (
        <>
          <strong>react-atomic-design</strong>
          <br />
          https://github.com/danilowoz/react-atomic-design
        </>
      )
    },
    {
      src:
        'https://avatars2.githubusercontent.com/u/55175301?s=460&u=3c5fe0537ea79625e8227084ecbf303179137433&v=4',
      title: 'Matsunaga Syun',
      description: (
        <>
          <strong>atomic-design</strong>
          <br />
          https://github.com/TERADA-DANTE/atomic-design
        </>
      )
    }
  ]
  return (
    <Row>
      {items.map((item, index) => (
        <Col span={8} key={index}>
          <Card
            src={item.src}
            title={item.title}
            description={item.description}
          />
        </Col>
      ))}
    </Row>
  )
}
