import '../../styles/Button.css'
function Button(props) {
    console.log(props);
    return (
        <li className={`${props.className} Button`}>
            <a><img src={props.icon} alt={`${props.className}-icon`} width={'18px'} height={'18px'} /></a>
        </li>
    )
}

export default Button