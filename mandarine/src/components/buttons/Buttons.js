import { Fragment } from 'react'
import '../../styles/Buttons.css'
import Button from './Button'
function Buttons() {
    return (
        <div className={'Buttons'}>
            <Button className={'list-button'} />
            <Button className={'search-button'} />
        </div>
    )
}

export default Buttons