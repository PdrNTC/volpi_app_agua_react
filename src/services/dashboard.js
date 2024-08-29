import axios from "axios";

//Criando conexão com o Back-end
const usuariosAPI = axios.create({baseURL: "http://127.0.0.1:8000/usuarios"})

//Criando função que retorna a promisse
async function getUsuarios() {
    const response = await usuariosAPI.get('/')
    return response.data
}

export {
    getUsuarios,
}