import '../../../styles/Header.css'
import Nav from './Nav/Nav'
import Buttons from './buttons/Buttons'
function Header() {
    return (
        <div className={'Header'}>
            <Buttons className={'Buttons'} />
            <Nav className={'Nav'} />
        </div>
    )
}

export default Header