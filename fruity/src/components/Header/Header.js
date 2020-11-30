// import css
import '../../styles/Header.css'

// import components
import Logo from './Logo'
import Nav from './Nav'
function Header() {
    return (
        <header className={`Header`} >
            <Logo width={`30px`} height={`30px`} className={`Logo`} />
            <Nav props={[`Banana`, `Cherry`, `Strawberry`]} className={`Header-Nav`} />
        </header>
    )
}
export default Header