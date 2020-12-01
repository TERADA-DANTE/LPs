import { Fragment } from "react";

function Background({ props }) {
    const [fruits, index] = props

    return <Fragment>
        {fruits.map((fruit, i) => {
            const style = {
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                backgroundImage: `linear-gradient(to right bottom, ${fruit.colors.join(',')})`,
                opacity: i === index ? 1 : 0,
                transition: '1s linear',
                zIndex: -1
            }
            return <div className={`s`} style={style} key={i} />
        })}
    </Fragment>
}

export default Background
