import '../../styles/Container.css'
import ContainerL from './ContainerL'
import ContainerR from './ContainerR'
function Container() {
    return (
        <div className={'Container'}>
            <ContainerL />
            <ContainerR />
        </div>
    )
}

export default Container