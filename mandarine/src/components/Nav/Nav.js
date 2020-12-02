import "../../styles/Nav.css"
function Nav(props) {
    const { items } = props
    return (
        <div className={"Nav"}>
            <ul>
                {items.map((item, index) => (
                    <li className={`${item}`} key={index}>
                        <a href={"./"} className={`nav-icons`}>
                            <span>{item}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav
