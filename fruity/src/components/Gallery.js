import { Fragment } from "react"
//import css
import "../styles/Gallery.css"

import DefaultImg from "../assets/images/default.jpg"
function Gallery() {
    return (
        <Fragment>
            <section className={`Gallery`}>
                <img src={DefaultImg} alt="default" className={`background`} />
            </section>
        </Fragment>
    )
}

export default Gallery
