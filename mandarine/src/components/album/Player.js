// import components
import Buttons from "../buttons/Buttons"
import Loading from "./Loading"
import "../../styles/Player.css"

function Player({ props, onClick }) {
    return (
        <nav className={`Player`}>
            <Loading props={props} />
            <Buttons props={["left", "right", onClick]} />
        </nav>
    )
}

export default Player
