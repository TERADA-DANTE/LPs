import { Fragment } from 'react'
import '../../styles/Album.css'
import Gallery from './Gallery'
import Player from './Player'

function Album() {
    return (
        <Fragment>
            <Gallery className={'Gallery'} />
            <Player className={'Player'} />
        </Fragment>
    )
}

export default Album
