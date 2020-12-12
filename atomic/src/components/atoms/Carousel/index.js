import { Carousel } from 'antd'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#1d3557'
}

export default function () {
  const dotPosition = 'right'
  return (
    <Carousel dotPosition={dotPosition} autoplay={true} autoplaySpeed={2000}>
      {['Atom', 'Molcule', 'Organism', 'Template', 'Page'].map((v, i) => {
        return (
          <div key={i}>
            <h3 style={contentStyle}>{v}</h3>
          </div>
        )
      })}
    </Carousel>
  )
}
