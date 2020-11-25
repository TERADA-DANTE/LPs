import { Fragment } from 'react'
import '../../../styles/Header.css'
import Nav from '../body/Nav/Nav'
import Buttons from './buttons/Buttons'
function Header() {
    return (
        <div className={'Header'}>
            <Buttons className={'Buttons'} />
            <div></div>
            <Nav className={'Nav'} />
        </div>
    )
}

export default Header