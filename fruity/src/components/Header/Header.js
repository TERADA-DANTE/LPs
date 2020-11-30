import Logo from './Logo'
import Nav from './Nav'
function Header() {
    return (
        <header>
            <Logo width={`10px`} height={`10px`} className={`Logo`} />
            <Nav props={[`Banana`, `Cherry`, `Strawberry`]} className={`header-nav`} />
        </header>
    )
}
export default Header