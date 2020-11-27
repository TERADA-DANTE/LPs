import '../../styles/Gallery.css'
import defaultImg from '../../assets/images/default.jpg'
function Gallery({ props }) {
    const [name, img] = props
    return <figure className={'Gallery'}>
        <img src={img || defaultImg} alt={name} />
    </figure>
}

export default Gallery