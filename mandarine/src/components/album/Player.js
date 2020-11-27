// import components
import Buttons from '../buttons/Buttons'
import Loading from './Loading'
import '../../styles/Player.css'

function Player(props) {
    return (
        <nav className={`Player`}>
            <Loading />
            <Buttons props={['left', 'right', props.onClick]} />
        </nav>
    )
}

export default Player