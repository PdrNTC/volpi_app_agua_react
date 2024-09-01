import styled from "styled-components";
import HistoricoUsuarios from "../componentes/HistoricoUsuarios";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Historico() {
    return(
        <AppContainer>
            <HistoricoUsuarios />
        </AppContainer>
    )
}

export default Historico;