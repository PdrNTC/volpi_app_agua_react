import styled from "styled-components";
import { useState } from "react";
import { postNovoUsuario } from "../../services/dashboard";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 30px;
  padding: 20px;
  background-color: #F7F7F7;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

const Etiqueta = styled.label`
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 700;
`

const Input = styled.input`
    margin-bottom: 20px;
    padding: 7px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`

const Botao = styled.button`
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

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
            <Etiqueta htmlFor="nome">Digite seu Nome</Etiqueta>
            <Input 
                type="text" 
                id="nome" 
                placeholder="Digite o seu nome"
                value={novoUsuario.nome}
                onChange={handleChange} 
                required>
            </Input>

            <Etiqueta htmlFor="peso">Informe o seu peso</Etiqueta>
            <Input 
                type="number" 
                id="peso"
                placeholder="Digite o peso em KG"
                value={novoUsuario.peso}
                onChange={handleChange} 
                required
            >

            </Input>

            <Botao type="submit">Cadastrar</Botao>
        </FormContainer>
    );
}

export default Formulario;