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
const Formulario = styled.div`
    margin-top: 10px;
`;

function Dashboard() {
    const [usuarios, setUsuarios] = useState([])
    const [quantidadeAgua, setQuantidadeAgua] = useState(250)

    useEffect(() => {
        fetchUsuarios()
    }, [])

    async function fetchUsuarios() {
        const usuariosDaApi = await getUsuarios()
        setUsuarios(usuariosDaApi)
    }

    async function handleSubmit(event, id_usuario) {
        event.preventDefault()
        await postConsumoAgua(id_usuario, quantidadeAgua)
        fetchUsuarios() //Recarregar os dados dos usuários após registrar qtd água
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
                    <Formulario>
                        <FormularioConsumo 
                            id_usuario={usuario.id}
                            quantidadeAgua={quantidadeAgua}
                            setQuantidadeAgua={setQuantidadeAgua}
                            handleSubmit={handleSubmit}
                        />
                    </Formulario>
                </InformacoesContainer>
            )) : null}
            </ResultadoContainer>
        </AppContainer>
    );
}

export default Dashboard;