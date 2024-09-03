import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getUsuarios } from '../services/dashboard';
import Header from '../componentes/Header';

const LoginContainer = styled.div`
    background-color: #F4EFE0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Para centralizar verticalmente */
`;

const TituloHome = styled.h2`
    font-size: 28px;
    margin-bottom: 20px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
`;

const Label = styled.label`
    font-size: 16px;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const RegistrarLink = styled.p`
    margin-top: 20px;
    cursor: pointer;
    color: #007bff;

    &:hover {
        text-decoration: underline;
    }
`;

function Home() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        //Prevenindo evento padrão da pag
        event.preventDefault();

        // Buscando os usuários do BACK-END
        const usuarios = await getUsuarios();

        // Comparando strings de username para validar
        const usuario = usuarios.find(user => user.nome.toLowerCase() === username.toLowerCase());

        if (usuario) {
            // Redireciona para o Dashboard
            navigate(`/dashboard/${usuario.id}`);
        } else {
            alert("Usuário não cadastrado na base de dados!")
        }
    };

    return (
        <LoginContainer>
            <Header />
            <TituloHome>Bem vindo ao VOLPI - Water APP</TituloHome>
            <FormContainer onSubmit={handleSubmit}>
                <Label>Informe seu username para logar</Label>
                <Input
                    type="text"
                    placeholder="Digite o username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                />
                <Button type="submit">Login</Button>
            </FormContainer>
            <RegistrarLink onClick={() => navigate('/cadastrar')}>Registrar-se</RegistrarLink>
        </LoginContainer>
    );
}

export default Home;
