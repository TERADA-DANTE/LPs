import '../../../styles/Card.css'

function Card({ name, origin, colors }) {
    return <article className={`Card`}>
        <div className={`Description`}>
            <h1 className={`name`}>{name}</h1>
            <h4 className={`origin`}>{origin}</h4>
        </div>
        <ul className={`Colors`}>
            {colors.map((color, index) => {
                const style = {
                    backgroundColor: color,
                    width: '100%'
                }
                return <li key={index} style={style}></li>
            })}
        </ul>
    </article>
}

export default Card