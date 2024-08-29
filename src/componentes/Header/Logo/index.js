import styled from "styled-components";
import logo from '../../../imgs/volpi_tech_logo.jpeg';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImagem = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImagem 
                src={logo}
                alt="Logo da volpi.tech"
            />
        </LogoContainer>
    );
}

export default Logo;