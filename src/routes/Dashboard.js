import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUsuarios, postConsumoAgua } from "../services/dashboard";

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
const FormularioConsumo = styled.form`
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
                {/* { usuarios.length !== 0 ? usuarios.map(usuario => (
                    <InformacoesContainer>
                        <p>{usuario.nome}</p>
                        <p>{usuario.peso}</p>
                    </InformacoesContainer>
                )) : null} */}
                {usuarios.length !== 0 ? usuarios.map(usuario => (
                <InformacoesContainer key={usuario.id}>
                    <p>Nome: {usuario.nome}</p>
                    <p>Peso: {usuario.peso}kg</p>
                    <p>Meta do dia: {usuario.meta_diaria}ml</p>
                    <p>Meta já consumida: {usuario.total_agua_ingerida}ml</p>
                    <p>Meta restante: {usuario.quantidade_faltante}ml</p>
                    <p>Chegou na meta hoje? {usuario.quantidade_faltante <= 0 ? 'SIM' : 'NÃO'}</p>

                    <FormularioConsumo onSubmit={(e) => handleSubmit(e, usuario.id)}>
                        <label>
                            <input
                                type="radio"
                                name={`quantidade-${usuario.id}`}
                                value={250}
                                checked={quantidadeAgua === 250}
                                onChange={(e) => setQuantidadeAgua(parseInt(e.target.value))}
                            />
                            Copo pequeno 250ml
                        </label>
                        <label>
                            <input
                                type="radio"
                                name={`quantidade-${usuario.id}`}
                                value={350}
                                onChange={(e) => setQuantidadeAgua(parseInt(e.target.value))}
                            />
                            Copo médio 350ml
                        </label>
                        <label>
                            <input
                                type="radio"
                                name={`quantidade-${usuario.id}`}
                                value={500}
                                onChange={(e) => setQuantidadeAgua(parseInt(e.target.value))}
                            />
                            Garrafa média 500ml
                        </label>
                        <button type="submit">Consumir</button>
                    </FormularioConsumo>
                </InformacoesContainer>
            )) : null}
            </ResultadoContainer>
        </AppContainer>
    );
}

export default Dashboard;