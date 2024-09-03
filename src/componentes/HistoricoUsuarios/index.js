import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHistoricoUsuario } from "../../services/historico";
import { useParams } from "react-router-dom";

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

function HistoricoUsuario() {
  const [historico, setHistorico] = useState([]);
  const { id_usuario } = useParams(); // Pegando o ID no endpoint

  useEffect(() => {
    async function fetchHistorico() {
      try {
        const dadosHistorico = await getHistoricoUsuario(id_usuario);
        setHistorico(dadosHistorico);
      } catch (error) {
        alert("Erro ao obter os dados de histórico.");
      }
    }

    fetchHistorico();
  }, [id_usuario]); // 'id_usuario' é a única dependência real

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toISOString().split('T')[0];
  };

  return (
    <HistoricoContainer>
      <Titulo>Histórico de Consumo de Água</Titulo>
      {historico.length > 0 ? (
        historico.map((registro, index) => (
          <RegistroContainer key={index}>
            <p><strong>Nome: </strong> {registro.nome_usuario}</p>
            <p><strong>Peso em kg: </strong> {registro.peso_usuario}</p>
            <p><strong>Data: </strong> {formatarData(registro.data)}</p>
            <p><strong>Meta Diária: </strong> {registro.meta_diaria} ml</p>
            <p><strong>Quantidade Total de Água Ingerida: </strong> {registro.total_agua} ml</p>
            <p><strong>Chegou na meta hoje: </strong> {registro.atingiu_meta ? "SIM" : "NÃO"}</p>
            <Separador />
          </RegistroContainer>
        ))
      ) : (
        <p>Nenhum histórico disponível no momento.</p>
      )}
    </HistoricoContainer>
  );
}

export default HistoricoUsuario;
