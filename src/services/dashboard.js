import axios from "axios";

//Criando conexão com o Back-end
const conexaoAPI = axios.create({baseURL: "http://127.0.0.1:8000"})

//Criando função que retorna a promisse
async function getUsuarios() {
    const response = await conexaoAPI.get('/usuarios/')
    return response.data
}

async function postConsumoAgua(id_usuario, qtd_ingerida) {
    await conexaoAPI.post('/agua_ingerida/', {
        usuario: id_usuario,
        qtd_agua: qtd_ingerida,
    });
}

export {
    getUsuarios,
    postConsumoAgua,
}