import styled from "styled-components";
import Formulario from "./componentes/Formulario";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
const FormCentraliza = styled.div`
  flex: 1; /* Faz o FormWrapper ocupar o espaço restante */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

function App() {
  return (
    <AppContainer>
      <FormCentraliza>
        <Formulario />
      </FormCentraliza>
    </AppContainer>
  );
}

export default App;
