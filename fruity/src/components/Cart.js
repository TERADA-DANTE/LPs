import Aside from './Cart/Aside'
import Content from './Cart/Content'
import Nav from './Header/Nav'
function Cart() {
    return <section className={`Cart`}>
        <Nav props={[`Home`, `Search`, `List`]} className={`Cart-Nav`} />
        <Content />
        <Aside />
    </section>
}

export default Cart