import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDadosUsuario, postConsumoAgua } from "../services/dashboard";
import { useParams } from "react-router-dom";
import UsuariosInfo from "../componentes/UsuariosInfo";
import FormularioConsumo from "../componentes/FormularioConsumo";

const AppContainer = styled.div`
  background-color: #F4EFE0;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Texto = styled.p`
  text-align: center;
  font-weight: 600;
`

const InputData = styled.input`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;  
`


function Dashboard() {
  const { id_usuario } = useParams(); // Pegando o ID na URL
  const [usuario, setUsuario] = useState({});
  const [data, setData] = useState(new Date().toISOString().split("T")[0]); // Data padrão é a atual
  const [quantidadeAgua, setQuantidadeAgua] = useState(0);
  // const navigate = useNavigate(); //Hook de navegação

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

  // const irParaHistorico = () => {
  //   navigate(`/historico/${id_usuario}`);
  // };

  return (
    <AppContainer>
      <TituloDash>Dashboard do usuário: {usuario.nome}</TituloDash>
      <InformacoesContainer>
        <DataContainer>
            <Etiqueta>Selecione uma Data para registrar o consumo</Etiqueta>
        </DataContainer>
        <DataContainer>
          <InputData
                type="date"
                value={data}
                max={new Date().toISOString().split("T")[0]} //Limitando a data máxima a dt atual //
                onChange={(e) => setData(e.target.value)}
          />
        </DataContainer>
        <UsuariosInfo usuario={usuario} />
        
        <Texto>Selecione abaixo a quantidade de água para registrar o consumo.</Texto>
        <FormularioConsumo
                id_usuario={id_usuario}
                quantidadeAgua={quantidadeAgua}
                setQuantidadeAgua={setQuantidadeAgua}
                handleSubmit={handleSubmit}
        />
      </InformacoesContainer>
    </AppContainer>
  );
}

export default Dashboard;