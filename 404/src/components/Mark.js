import '../styles/Mark.css'

// import components
import Four from '../components/Four'
import Zero from '../components/Zero'
function Mark() {
    return <div className={`Mark`}>
        <div className={`Mark-main`}>
            <Four width={'151px'} height={`201px`} className={`Four`} />
            <Zero width={'151px'} height={`201px`} className={`Zero`} />
            <Four width={'151px'} height={`201px`} className={`Four`} />
        </div>
        <div className={`Mark-aside`}>Aside</div>
    </div>
}

export default Mark