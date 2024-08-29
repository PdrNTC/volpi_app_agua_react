import styled from "styled-components";
import Logo from "./Logo";
import OpcoesHeader from "../OpcoesHeader";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: #F4EFE0;
    display: flex;
    justify-content: center;
    text-align: center
`

function Header() {
    return (
        <HeaderContainer>
             <Link to="/"> {/* Redirecionando para a home com a logo */}
                <Logo />
            </Link>
            <OpcoesHeader /> {/* componente OpcoesHeader */}
        </HeaderContainer>
    );
}

export default Header;