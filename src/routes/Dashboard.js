import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDadosUsuario, postConsumoAgua } from "../services/dashboard";
import { useNavigate, useParams } from "react-router-dom";
import UsuariosInfo from "../componentes/UsuariosInfo";
import FormularioConsumo from "../componentes/FormularioConsumo";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const InformacoesContainer = styled.div`
  margin-right: 20px;
`;

const TituloDash = styled.h2`
  font-size: 24px;
  text-align: center;
`;

const Etiqueta = styled.label`
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: 600;
    color: #333;
`

const DataContainer = styled.div`
    display: flex;
    justify-content: center;
`

function Dashboard() {
  const { id_usuario } = useParams(); // Pegando o ID na URL
  const [usuario, setUsuario] = useState({});
  const [data, setData] = useState(new Date().toISOString().split("T")[0]); // Data padrão é a atual
  const [quantidadeAgua, setQuantidadeAgua] = useState(0);
  const navigate = useNavigate(); //Hook de navegação

  const normalizarData = (dataString) => {
    const data = new Date(dataString);
    const dataUtc = new Date(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate());
    return dataUtc.toISOString().split('T')[0]; // Formata a data como YYYY-MM-DD
  };

  useEffect(() => {
    async function fetchUsuario() {
      const dados = await getDadosUsuario(id_usuario, normalizarData(data));
      setUsuario(dados);
    }

    fetchUsuario();
  }, [id_usuario, data]); // Reexecuta o useEffect ao mudar a data

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const dataNormalizada = normalizarData(data); // Normaliza a data antes de enviar
    try {
        await postConsumoAgua(id_usuario, quantidadeAgua, dataNormalizada); // Envia data específica
        const dadosAtualizados = await getDadosUsuario(id_usuario, dataNormalizada); // Atualiza os dados com base na nova data
        setUsuario(dadosAtualizados);
        alert("Consumo registrado com sucesso!");
    } catch (error) {
        alert("Erro ao registrar o consumo de água.");
    }
  };

  const irParaHistorico = () => {
    navigate(`/historico/${id_usuario}`);
  };

  return (
    <AppContainer>
      <TituloDash>Dashboard do usuário: {usuario.nome}</TituloDash>
      <InformacoesContainer>
        <DataContainer>
            <Etiqueta>Selecione uma Data para Consumo</Etiqueta>
            <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </DataContainer>
        <UsuariosInfo usuario={usuario} />
        <FormularioConsumo
                id_usuario={id_usuario}
                quantidadeAgua={quantidadeAgua}
                setQuantidadeAgua={setQuantidadeAgua}
                handleSubmit={handleSubmit}
        />
        <button onClick={irParaHistorico}>Ver Histórico</button>
      </InformacoesContainer>
    </AppContainer>
  );
}

export default Dashboard;