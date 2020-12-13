import { Empty, Button } from 'antd'

export default function () {
  return (
    <Empty
      image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
      imageStyle={{
        height: 60
      }}
      description={<span>Have questions?</span>}
    >
      <Button
        type='primary'
        onClick={() =>
          (window.location.href = 'https://github.com/TERADA-DANTE')
        }
      >
        Check Github
      </Button>
    </Empty>
  )
}
