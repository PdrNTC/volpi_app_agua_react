import styled from "styled-components";
import Logo from "./Logo";
import OpcoesHeader from "../OpcoesHeader";

const HeaderContainer = styled.header`
    background-color: #F4EFE0;
    display: flex;
    justify-content: center;
    text-align: center
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader /> {/* componente OpcoesHeader */}
        </HeaderContainer>
    );
}

export default Header;