// import css
import '../../styles/Buttons.css'

// import components
import Button from './Button'

// import files
import Search from '../../assets/icons/search.svg'
import List from '../../assets/icons/list.svg'
import Left from '../../assets/icons/left.svg'
import Right from '../../assets/icons/right.svg'
function Buttons({ props }) {
    const icons = {
        list: List,
        search: Search,
        left: Left,
        right: Right
    }
    const [v, w] = props
    return (
        <ul className={'Buttons'}>
            <Button className={`${v}-button`} icon={icons[v]} />
            <Button className={`${w}-button`} icon={icons[w]} />
        </ul>
    )
}

export default Buttons