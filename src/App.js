import styled from "styled-components";
import Formulario from "./componentes/Formulario";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
const FormCentraliza = styled.div`
  flex: 1; /* Faz o Form ocupar o espaço restante */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const TituloHome = styled.h2`
  font-size: 28px;
  color: #021526;
`

function App() {
  return (
    <AppContainer>
      <FormCentraliza>
        <TituloHome>Cadastrar novo usuário</TituloHome>
        <Formulario />
      </FormCentraliza>
    </AppContainer>
  );
}

export default App;
