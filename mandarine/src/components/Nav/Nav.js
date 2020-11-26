import '../../styles/Nav.css'
function Nav(props) {
    const { items } = props
    return (
        <div className={'Nav'}>
            <ul>
                {items.map((item, index) =>
                    <li className={`${item} nav-icons`} key={index}>
                        <a href={'./'} >{item}</a>
                    </li>)}
            </ul>

        </div>
    )
}

export default Nav