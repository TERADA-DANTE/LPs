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
            <span>{desc}</span>
            {/*ReadMore */}
            <h3>Read more</h3>
            {/* SNS */}
        </article>
    )
}

export default Description