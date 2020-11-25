// import packages
import styled from 'styled-components'

//import '../styles/Container.css'
const StyledContainer = styled.div`
    display : flex;
    align-items : center;
    justify-contents : center;
    width: 768px;
    height: 400px;
    background: linear-gradient(90deg, #f5b000 0%, #f5b000 20%, rgba(245,245,245,1) 20%);
    border: none;
    box-shadow: 0px 0px 50px 15px rgba(0,0,0,0.2);
    @media (max-width : 550px){
        width: 90vw;
        height: 50vh;
    }
`

function Container({ children }) {
    const Header = children[0]
    const Body = children[1]
    return <StyledContainer>{Header}{Body}</StyledContainer>
}

export default Container