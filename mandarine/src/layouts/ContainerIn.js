// import packages
import styled from 'styled-components'

// import 

const StyledContainerIn = styled.article`
    height:100%;
    width:50%;
    display : grid;
    grid-template-rows: 1fr 7fr;
    grid-template-columns : 2fr 3fr;
`
function ContainerIn({ children, className }) {
    const header = children[0]
    const section = children[1]
    return (
        <StyledContainerIn className={className}>
            {header}{section}
        </StyledContainerIn>
    )
}

export default ContainerIn