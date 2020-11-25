import '../../styles/Container.css'
import Header from './header/Header'
import Album from './Album'
import Description from './Description'
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