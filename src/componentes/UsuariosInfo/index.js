import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto; /* Centraliza horizontalmente */
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 100%;
    max-width: 400px; /* Largura máxima do container */
`;

const InfoItem = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;


  strong {
    font-weight: 700;
    color: #007bff; 
  }
`;

const Botao = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

function UsuariosInfo({ usuario }) {
    const navigate = useNavigate(); //Hook de navegação

    const irParaHistorico = () => {
      navigate(`/historico/${usuario.id}`);
    };

    return (
        <InfoContainer>
            <InfoItem><strong>Nome: </strong> {usuario.nome || "N/A"}</InfoItem>
            <InfoItem><strong>Peso: </strong> {usuario.peso || "N/A"}kg</InfoItem>
            <InfoItem><strong>Meta do dia: </strong> {usuario.meta_diaria || 0}ml</InfoItem>
            <InfoItem><strong>Meta já consumida: </strong> {usuario.total_agua_ingerida || 0}ml</InfoItem>
            <InfoItem><strong>Meta restante: </strong> {usuario.quantidade_faltante}ml</InfoItem>
            <InfoItem><strong>Chegou na meta hoje: </strong> {usuario.quantidade_faltante <= 0 ? "SIM" : "NÃO"}</InfoItem>
            <Botao onClick={irParaHistorico}>Ver Histórico</Botao>
        </InfoContainer>
    );
}

export default UsuariosInfo;