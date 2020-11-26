// import packages
import styled from 'styled-components'

// import 

function Content({ children, className }) {
    const padding = className === 'Album' ? '0px 15px 50px 25px' : '0px 25px 50px 0px'
    const StyledContent = styled.section`
        display : grid;
        grid-row : 2;
        grid-column: 1 / span 2;
        padding : ${padding}    
    `
    return (
        <StyledContent className={className}>
            {children}
        </StyledContent>
    )
}

export default Content