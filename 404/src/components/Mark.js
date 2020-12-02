import "../styles/Mark.css"

// import components
import Four from "../components/Four"
import Zero from "../components/Zero"
import Left from "../components/Left"
import Right from "../components/Right"
function Mark() {
    return (
        <div className={`Mark`}>
            <Left width={`71px`} height={`83px`} className={`Left`} />
            <div className={`Mark-main`}>
                <Four width={"151px"} height={`201px`} className={`Four`} />
                <Zero width={"151px"} height={`201px`} className={`Zero`} />
                <Four width={"151px"} height={`201px`} className={`Four`} />
            </div>
            <div className={`Mark-aside`}>
                <Right width={`122px`} height={`138px`} className={`Right`} />
            </div>
        </div>
    )
}

export default Mark
