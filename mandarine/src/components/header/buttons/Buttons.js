import '../../../styles/Buttons.css'
//import Button from './Button'
function Buttons(props) {
    return (
        <div className={props.className}>
            <Button className={'list-button'} />
            <Button className={'search-button'} />
        </div>
    )
}

export default Buttons