import '../../../styles/Description.css'

function Description({ name, origin, colors }) {
    return <article className={`Description`}>
        <div className={`detail`}>
            <h1 className={`name`}>{name}</h1>
            <h4 className={`origin`}>{origin}</h4>
        </div>
        <nav className={`color`}>
            <ul className={`color-pick`}>
                {colors.map((color, index) => <li key={index}>{color}</li>)}
            </ul>
        </nav>
        <h6 className={`btn`}>Copy CSS</h6>
    </article>
}
export default Description