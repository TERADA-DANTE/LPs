// import css
import '../../styles/Show.css'


// import files
import DefaultImg from '../../assets/images/default.jpg'
function Show() {
    return <article className={`Show`}>
        <img src={DefaultImg} alt="default" />
    </article>
}

export default Show