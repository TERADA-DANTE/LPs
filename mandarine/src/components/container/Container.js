import '../../styles/Container.css'
import Album from './Album'
import Description from './Description'
function Container() {
    return (
        <div className={'Container'}>
            <Album />
            <Description />
        </div>
    )
}

export default Container