import styled from "styled-components";
import { useState } from "react";
import { postNovoUsuario } from "../../services/dashboard";

const FormContainer = styled.form`
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

    // Estado para armazenar os dados do novo usuário
    const [novoUsuario, setNovoUsuario] = useState({
        nome: "",
        peso: ""
    });

    // Função para atualizar o estado quando o usuário digita nos campos
    const handleChange = (evento) => {
        setNovoUsuario({
            ...novoUsuario,
            [evento.target.id]: evento.target.value
        });
    };
    
    // Função para enviar os dados para o backend e cadastrar o usuário
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        await postNovoUsuario(novoUsuario.nome, novoUsuario.peso);
        // Pode-se adicionar uma lógica adicional após o cadastro, como limpar o formulário ou exibir uma mensagem de sucesso
        setNovoUsuario({ nome: "", peso: "" });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Etiqueta htmlFor="nome">Digite seu Nome:</Etiqueta>
            <Input 
                type="text" 
                id="nome" 
                placeholder="Digite o seu nome"
                value={novoUsuario.nome}
                onChange={handleChange} 
                required>
            </Input>

            <Etiqueta htmlFor="peso">Informe o seu peso em KG:</Etiqueta>
            <Input 
                type="number" 
                id="peso"
                value={novoUsuario.peso}
                onChange={handleChange} 
                required
            >

            </Input>

            <button type="submit">Cadastrar</button>
        </FormContainer>
    );
}

export default Formulario;