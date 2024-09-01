import axios from "axios";

const conexaoAPI = axios.create({ baseURL: "http://127.0.0.1:8000" })

export async function getHistoricoTodosUsuarios() {
    try {
        const response = await conexaoAPI.get('/agua_ingerida/')
        return response.data;
    } catch (error) {
        alert("Erro ao obter os dados dos usuários: ", error)
    }
}