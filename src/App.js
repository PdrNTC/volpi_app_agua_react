import styled from "styled-components";

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 30px;
`

function App() {
  return (
    <AppContainer>
      <FormCentraliza>
        <FormContainer>
          <label>Digite seu Nome:</label>
          <input type="text" id="nome" placeholder="Digite o seu nome" required></input>

          <label>Informe o seu peso em KG:</label>
          <input type="number" id="peso" required></input>

          <input type="submit" value="Cadastrar"></input>
        </FormContainer>
      </FormCentraliza>
    </AppContainer>
  );
}

export default App;
