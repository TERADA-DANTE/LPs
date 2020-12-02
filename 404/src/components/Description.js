import { useEffect } from "react"
import "../styles/Description.css"
function Description() {
    useEffect(() => {
        const $spans = document.querySelectorAll("span")
        $spans.forEach(
            ($span, index) => ($span.style.animationDelay = `${index * 100}ms`)
        )
    })
    return (
        <p className={`Description`}>
            <span>W</span>
            <span>O</span>
            <span>O</span>
            <span>P</span>
            <span>S</span>
            <span>!</span> <span>P</span>
            <span>A</span>
            <span>G</span>
            <span>E</span> <span>N</span>
            <span>O</span>
            <span>T</span> <span>F</span>
            <span>O</span>
            <span>U</span>
            <span>N</span>
            <span>D</span>
        </p>
    )
}

export default Description
