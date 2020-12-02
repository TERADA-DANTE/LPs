// import css
import "../../styles/Buttons.css"

// import components
import Button from "./Button"

// import files
import Search from "../../assets/icons/search.svg"
import List from "../../assets/icons/list.svg"
import Left from "../../assets/icons/left.svg"
import Right from "../../assets/icons/right.svg"
function Buttons({ props }) {
    const icons = {
        list: List,
        search: Search,
        left: Left,
        right: Right,
    }
    const [v, w, onClick] = props
    return (
        <ul className={"Buttons"}>
            <Button
                className={`${v}-button`}
                icon={icons[v]}
                onClick={onClick ? () => onClick(-1) : null}
            />
            <Button
                className={`${w}-button`}
                icon={icons[w]}
                onClick={onClick ? () => onClick(1) : null}
            />
        </ul>
    )
}

export default Buttons
