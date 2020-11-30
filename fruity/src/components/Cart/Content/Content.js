import '../../../styles/Content.css'

import Description from './Description'
function Content({ props }) {
    return <div className={`Content`}>
        {
            props.map((item, index) => {
                const { name, origin, colors } = item
                return <Description
                    key={index}
                    name={name}
                    origin={origin}
                    colors={colors} />
            })
        }

    </div>
}

export default Content