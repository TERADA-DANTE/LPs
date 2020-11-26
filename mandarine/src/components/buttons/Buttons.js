// import css
import '../../styles/Buttons.css'

// import components
import Button from './Button'

// import files
import Search from '../../assets/icons/search.svg'
import List from '../../assets/icons/list.svg'
function Buttons() {
    return (
        <ul className={'Buttons'}>
            <Button className={'search-button'} icon={List} />
            <Button className={'list-button'} icon={Search} />
        </ul>
    )
}

export default Buttons