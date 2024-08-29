import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 30px;
`

const Etiqueta = styled.label`
    font-size: 16px;
    margin-bottom: 10px;
`

const Input = styled.input`
    margin-bottom: 20px;
`

function Formulario() {
    return (
        <FormContainer>
            <Etiqueta>Digite seu Nome:</Etiqueta>
            <Input type="text" id="nome" placeholder="Digite o seu nome" required></Input>

            <Etiqueta>Informe o seu peso em KG:</Etiqueta>
            <Input type="number" id="peso" required></Input>

            <Input type="submit" value="Cadastrar"></Input>
        </FormContainer>
    );
}

export default Formulario;