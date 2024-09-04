import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHistoricoUsuario } from "../../services/historico";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header";
import axios from "axios";

const HistoricoContainer = styled.div`
  background-color: #F4EFE0;
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

const BotaoVoltar = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  text-aling: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }
`;

// Botão Gerar PDF
const BotaoGerarPDF = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

function HistoricoUsuario() {
  const [historico, setHistorico] = useState([]);
  const { id_usuario } = useParams(); // Pegando o ID no endpoint
  const [gerandoPDF, setGerandoPDF] = useState(false);

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

  const navigate = useNavigate();

  const voltarAoDashboard = () => {
    navigate(`/dashboard/${id_usuario}`);
  };

  const gerarPDF = async () => {
    setGerandoPDF(true);
    try {
      await axios.post(`http://127.0.0.1:8000/gerar-pdf/`, {
        usuario_id: id_usuario // enviando ID do usuario pegado pelo useParams();
      })
      alert("PDF sendo gerado, você será notificado quando estiver pronto.")
    } catch (error) {
      console.error("Erro ao gerar PDF: ", error)
      alert("Ocorreu um erro ao gerar o PDF, verifique o console.")
    }
    setGerandoPDF(false)
  }

  return (
    <HistoricoContainer>
      <Header />
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
      <BotaoVoltar onClick={voltarAoDashboard}>Voltar para o Dashboard</BotaoVoltar>
      <BotaoGerarPDF 
        onClick={gerarPDF} 
        disable={gerandoPDF}
      > {gerandoPDF ? "Gerando PDF..." : "Gerar PDF"}

      </BotaoGerarPDF>
    </HistoricoContainer>
  );
}

export default HistoricoUsuario;
