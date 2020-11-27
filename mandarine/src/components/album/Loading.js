import { useEffect } from 'react'
import '../../styles/Loading.css'
function Loading({ props }) {
    const [current, length] = props
    useEffect(() => {
        const $line = document.querySelector('.line')
        $line.style.width = `${((current + 1) / length) * 100}%`
    })
    return (
        <div className={'Loading'}>
            <div className={'previous'}>{current + 1}</div>
            <div className={'current'}>
                <div className={'line'}></div>
            </div>
            <div className={'next'}>{length}</div>
        </div>)

}

export default Loading