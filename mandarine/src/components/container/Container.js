import '../../styles/Container.css'
import Header from './header/Header'
import Album from './album/Album'
import Description from './description/Description'
function Container() {
    return (
        <div className={'Container'}>
            <Header />
            <Album />
            <Description />
        </div>
    )
}

export default Container