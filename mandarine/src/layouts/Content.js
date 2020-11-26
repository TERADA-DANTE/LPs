// import packages
import styled from 'styled-components'

// import 

function Content({ children, type }) {
    const padding = type === 'Album' ? '0px 15px 50px 25px' : '0px 25px 50px 0px'
    const StyledContent = styled.section`
        display : grid;
        grid-template-columns : 1fr 1fr;
        grid-template-rows : 5fr 1fr;
        grid-row : 2;
        grid-column: 1 / span 2;
        padding : ${padding}    
    `
    return (
        <StyledContent>
            {children}
        </StyledContent>
    )
}

export default Content