import "../../styles/Button.css"
function Button(props) {
    const { onClick } = props
    return (
        <li
            className={`${props.className} Button`}
            onClick={onClick ? () => onClick() : null}
        >
            <a className={"icon"}>
                <img
                    src={props.icon}
                    alt={`${props.className}-icon`}
                    width={"18px"}
                    height={"18px"}
                />
            </a>
        </li>
    )
}

export default Button
