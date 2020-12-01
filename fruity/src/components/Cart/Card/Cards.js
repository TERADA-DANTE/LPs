import '../../../styles/Cards.css'

import Card from './Card'

function Cards({ props }) {
    const [fruits, index, setIndex] = props
    return <div className={`Cards`}>
        {
            fruits.map((fruit, idx) => {
                const { name, origin, colors } = fruit
                return <Card
                    key={idx}
                    name={name}
                    origin={origin}
                    colors={colors}
                    isActive={index === idx}
                    setIndex={() => setIndex(idx)}
                />
            })
        }
    </div>
}

export default Cards