// import components
import Buttons from '../buttons/Buttons'
import Loading from './Loading'
import '../../styles/Player.css'

function Player() {
    return (
        <nav className={`Player`}>
            <Loading />
            <Buttons props={['left', 'right']} />
        </nav>
    )
}

export default Player