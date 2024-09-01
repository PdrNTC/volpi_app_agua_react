import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;
    list-style: none;
`

const Opcao = styled.li`
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    list-style: none;
    text-decoration: none;
    color: #021526;

    &:hover {
        color: #007bff;
    }
`

// Criando tag estilizada do Link do react
const LinkEstilizado = styled(Link)`
    text-decoration: none;
`

// Lista com as opções do Header
const textoOpcoes = ['DASHBOARD', 'HISTORICO'];

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
               <LinkEstilizado key={texto} to ={`/${texto.toLowerCase()}`}> 
                <Opcao> 
                    <p>{texto}</p> 
                </Opcao> 
               </LinkEstilizado>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;