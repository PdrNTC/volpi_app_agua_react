import styled from "styled-components"
import { useEffect, useState } from "react";
import { getHistoricoTodosUsuarios } from "../../services/historico";


const HistoricoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const RegistroContainer = styled.div`
  background-color: #f7f7f7;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Separador = styled.hr`
  margin: 20px 0;
`;



function HistoricoUsuarios() {
    const [historico, setHistorico] = useState([]);
    
    useEffect(() => {
        fetchHistorico();
    })

    async function fetchHistorico() {
        try {
            const dadosHistorico = await getHistoricoTodosUsuarios();
            setHistorico(dadosHistorico)
        } catch (error) {
            alert("Erro ao obter os dados de histórico.")
        }
    }

    return (
        <HistoricoContainer>
            <Titulo>Histórico de Consumo de Todos os Usuários</Titulo>
            { historico.length > 0 ? (
                historico.map((registro, index) => (
                    <RegistroContainer key={index}>
                        <p>Nome: {registro.nome}</p>
                        <p>Data: {new Date(registro.data).toLocaleDateString()}</p>
                        <p>Quantidade de Água Ingerida: {registro.qtd_agua} ml</p>
                        <Separador/>
                    </RegistroContainer>
                ))
            ) : (
                <p>Nenhum histórico disponível no momento.</p>
            )}
        </HistoricoContainer>
    )
}

export default HistoricoUsuarios