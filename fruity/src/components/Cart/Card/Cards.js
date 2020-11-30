import '../../../styles/Cards.css'

import Card from './Card'

function Cards({ props }) {
    return <div className={`Cards`}>
        {
            props.map((prop, index) => {
                const { name, origin, colors } = prop
                return <Card
                    key={index}
                    name={name}
                    origin={origin}
                    colors={colors} />
            })
        }
    </div>
}

export default Cards