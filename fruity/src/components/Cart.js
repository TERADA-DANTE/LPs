// import css
import '../styles/Cart.css'

// import component
import Aside from './Cart/Aside'
import Content from './Cart/Content/Content'
import Nav from './Header/Nav'

// import files
import Search from '../assets/icons/search.svg'
import Cargo from '../assets/icons/cargo.svg'
import List from '../assets/icons/list.svg'
function Cart({ props }) {
    const icons = {
        search: Search,
        cargo: Cargo,
        list: List
    }
    const buttons = ['search', 'cargo', 'list'].map((item) =>
        <img src={icons[item]} alt={item} />
    )
    return <section className={`Cart`}>
        <Nav props={buttons} className={`Cart-Nav`} />
        <Content props={props} />
        <Aside />
    </section>
}

export default Cart