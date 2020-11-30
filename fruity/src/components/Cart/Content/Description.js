import '../../../styles/Description.css'

function Description() {
    return <article className={`Description`}>
        <div className={`detail`}>
            <h1>Banana</h1>
            <h4>fukuoka</h4>
            <span>$0.99</span>
        </div>
        <nav className={`color`}>
            <ul className={`color-pick`}>
                <li>color 1</li>
                <li>color 2</li>
            </ul>
        </nav>
    </article>
}
export default Description