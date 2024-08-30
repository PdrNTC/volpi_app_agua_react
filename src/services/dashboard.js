import axios from "axios";

//Criando conexão com o Back-end
const conexaoAPI = axios.create({baseURL: "http://127.0.0.1:8000"})

//Criando função que retorna a promisse do get dos usuários
async function getUsuarios() {
    const response = await conexaoAPI.get('/usuarios/')
    return response.data
}

//Function para cadastrar consumo de água na api
async function postConsumoAgua(id_usuario, qtd_ingerida) {
    try {
        const response = await conexaoAPI.post('/agua_ingerida/', {
            usuario: id_usuario,
            qtd_agua: qtd_ingerida,
        });
        return response.data
    } catch (error) {
        alert("Erro ao registrar consumo de água.", error)
    }
    
}

async function postNovoUsuario(nome, peso) {
    try {
        const response = await conexaoAPI.post('/usuarios/', { nome, peso });
        return response.data;
    } catch (error) {
        console.error("Erro ao cadastrar novo usuário:", error);
        alert("Houve um problema ao cadastrar o usuário.");
    }
}


export {
    getUsuarios,
    postConsumoAgua,
    postNovoUsuario,
}