import '../../../styles/Nav.css'
function Nav(props) {
    return (
        <div className={props.className}>

            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>F&A</div>
        </div>
    )
}

export default Nav