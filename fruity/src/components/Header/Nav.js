function Nav({ props, className }) {

    return <ul className={className}>
        {props.map((item, index) => <li key={index} >
            {item}
        </li>)}
    </ul>
}

export default Nav