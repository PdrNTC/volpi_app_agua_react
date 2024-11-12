import styled from "styled-components";
import logo from '../../../imgs/garrafa_agua.png';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImagem = styled.img`
    margin-right: 10px;
    width: 100px;
    height: 100px;
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