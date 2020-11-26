import '../../styles/Gallery.css'
import defaultImg from '../../assets/images/default.jpg'
function Gallery({ props }) {
    const [name, img] = props
    return <article className={'Gallery'}>hi This is Galllery
        {name}
        <img src={img || defaultImg} alt={name} />
    </article>
}

export default Gallery