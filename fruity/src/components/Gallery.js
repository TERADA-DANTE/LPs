import { Fragment } from 'react'
//import css
import '../styles/Gallery.css'

import Header from './Header/Header'
import Show from './Gallery/Show'
import Language from './Gallery/Language'
import DefaultImg from '../assets/images/default.jpg'
function Gallery() {
    return <Fragment>

        <section className={`Gallery`}>
            <img src={DefaultImg} alt="default" className={`background`} />
            <Header />
            <Show />
            <Language />
        </section>
    </Fragment>

}

export default Gallery