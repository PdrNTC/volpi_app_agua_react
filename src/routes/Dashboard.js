import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUsuarios } from "../services/dashboard";

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

    useEffect(() => {
        fetchUsuarios()
    }, [])

    async function fetchUsuarios() {
        const usuariosDaApi = await getUsuarios()
        setUsuarios(usuariosDaApi)
    }

    return (
        <AppContainer>
            <TituloDash>Dashboard dos usuários</TituloDash>
            <ResultadoContainer>
                { usuarios.length !== 0 ? usuarios.map(usuario => (
                    <InformacoesContainer>
                        <p>{usuario.nome}</p>
                        <p>{usuario.peso}</p>
                    </InformacoesContainer>
                )) : null}
            </ResultadoContainer>
        </AppContainer>
    );
}

export default Dashboard;