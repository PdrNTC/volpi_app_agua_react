import styled from "styled-components";
import HistoricoUsuario from "../componentes/HistoricoUsuarios";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Historico() {
    return(
        <AppContainer>
            <HistoricoUsuario />
        </AppContainer>
    )
}

export default Historico;