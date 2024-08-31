import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUsuarios, postConsumoAgua } from "../services/dashboard";
import UsuariosInfo from "../componentes/UsuariosInfo";
import FormularioConsumo from "../componentes/FormularioConsumo";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const InformacoesContainer = styled.div`
    margin-right: 20px;
`

const TituloDash = styled.h2`
    font-size: 24px;
    text-align: center;
`

function Dashboard() {
    const [usuarios, setUsuarios] = useState([])
    //const [quantidadeAgua, setQuantidadeAgua] = useState(250)
    const [quantidadeAgua, setQuantidadeAgua] = useState({}) //Estado para armazenar a quantidade a cada usuário

    useEffect(() => {
        fetchUsuarios()
    }, [])

    async function fetchUsuarios() {
        const usuariosDaApi = await getUsuarios()
        setUsuarios(usuariosDaApi)
    }

    //Função para lidar com a quantidade selecionada para o usuário especifico.
    const handleQuantidadeSelecionada = (id_usuario, quantidade) => {
        setQuantidadeAgua(prevState => ({
            ...prevState,
            [id_usuario]: quantidade 
        }))
    }

    async function handleSubmit(event, id_usuario) {
        event.preventDefault()
        if (quantidadeAgua[id_usuario]) {
            await postConsumoAgua(id_usuario, quantidadeAgua[id_usuario])
            fetchUsuarios() //Recarregar os dados dos usuários após registrar qtd água    
        } else {
            alert("É necessário selecionar uma quantidade de água para consumo.")
        }
        
    }

    return (
        <AppContainer>
            <TituloDash>Dashboard dos usuários</TituloDash>
            <ResultadoContainer>
                {usuarios.length !== 0 ? usuarios.map(usuario => (
                <InformacoesContainer key={usuario.id}>
                    <p>Nome: {usuario.nome}</p>
                    <p>Peso: {usuario.peso}kg</p>
                    <UsuariosInfo usuario={usuario} />
                    <FormularioConsumo 
                        id_usuario={usuario.id}
                        quantidadeAgua={quantidadeAgua[usuario.id] || 0}
                        setQuantidadeAgua={handleQuantidadeSelecionada}
                        handleSubmit={handleSubmit}
                    />
                </InformacoesContainer>
            )) : null}
            </ResultadoContainer>
        </AppContainer>
    );
}

export default Dashboard;