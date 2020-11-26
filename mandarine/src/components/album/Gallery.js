import '../../styles/Gallery.css'

function Gallery(props) {
    const { name, img } = props
    return <article className={'Gallery'}>hi This is Galllery
    {name}
        <img src={`../../assets/images/yui-aragaki.jpg`} alt={name} />
    </article>
}

export default Gallery