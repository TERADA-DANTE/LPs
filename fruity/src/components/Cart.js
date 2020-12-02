// import css
import '../styles/Cart.css'

// import component
import Aside from './Cart/Aside'
import Cards from './Cart/Card/Cards'
import Nav from './Cart/Nav'

// import files
import Search from '../assets/icons/search.svg'
import Cargo from '../assets/icons/cargo.svg'
import List from '../assets/icons/list.svg'
function Cart({ props }) {
    const [fruits, index, setIndex] = props
    const icons = {
        search: Search,
        cargo: Cargo,
        list: List,
    }
    const buttons = ['search', 'cargo', 'list'].map((item) => (
        <img src={icons[item]} alt={item} width={`15px`} height={`15px`} />
    ))
    return (
        <section className={`Cart`}>
            <Nav props={buttons} className={`Nav`} />
            <Cards props={[fruits, index, setIndex]} />
            <Aside />
        </section>
    )
}

export default Cart
