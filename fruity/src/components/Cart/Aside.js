import "../../styles/Aside.css"
function Aside() {
    const items = ["Instagram", "Twitter", "Youtube"]
    return (
        <ul className={`Aside`}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default Aside
