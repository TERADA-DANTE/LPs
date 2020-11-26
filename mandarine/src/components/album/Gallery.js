import '../../styles/Gallery.css'

function Gallery(props) {
    const { props: name } = props
    const src = require(`../../assets/images/${name.toLowerCase().split(' ').join('_')}.jpg`)
    return <article className={'Gallery'}>hi This is Galllery
        {name}
        <img src={src} alt={name} />
    </article>
}

export default Gallery