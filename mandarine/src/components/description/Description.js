import '../../styles/Description.css'
function Description(props) {
    const [type, name, desc] = props.props
    return (
        <article className={'Description'}>
            {/* type */}
            <h3>{type}</h3>
            {/*Name*/}
            <h1>{name}</h1>
            {/*information */}
            <p className={`desc`}>{desc}</p>
            {/*ReadMore */}
            <div className={`sns`}>Find more</div >
            {/* SNS */}
        </article>
    )
}

export default Description