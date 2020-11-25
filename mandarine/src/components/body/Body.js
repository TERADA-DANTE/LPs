import '../../../styles/Body.css'
import Album from '../header/album/Album'
import Description from './description/Description'
function Body(props) {
    return (
        <div className={props.className}>
            <Album />
            <Description />
        </div>
    )
}

export default Body