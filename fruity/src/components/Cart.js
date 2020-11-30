// import css
import '../styles/Cart.css'

// import component
import Aside from './Cart/Aside'
import Content from './Cart/Content'
import Nav from './Header/Nav'

// import files
import Search from '../assets/icons/search.svg'
import Cargo from '../assets/icons/cargo.svg'
import List from '../assets/icons/list.svg'
function Cart() {
    const icons = {
        search: Search,
        cargo: Cargo,
        list: List
    }
    const props = ['search', 'cargo', 'list'].map((item) =>
        <img src={icons[item]} alt={item} />
    )
    return <section className={`Cart`}>
        <Nav props={props} className={`Cart-Nav`} />
        <Content />
        <Aside />
    </section>
}

export default Cart