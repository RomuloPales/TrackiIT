import styled from 'styled-components';
import logo from '../assets/logo.png';

export default function Logo() {
return(
    
    <ContainerImg>
        <img src={logo} alt="logo" />
    </ContainerImg>

    
    )
}

const ContainerImg = styled.div`
    width: 100%;
    margin-top: 70px;
    margin-bottom: 33px;
    display: flex;
    justify-content: center;
    
`