import axios from "axios";

const conexaoAPI = axios.create({ baseURL: "http://127.0.0.1:8000" })

// Função para buscar o histórico de um usuário específico
export async function getHistoricoUsuario(id_usuario) {
  try {
      const response = await conexaoAPI.get('/agua_ingerida/', {
          params: { usuario_id: id_usuario }
      });
      return response.data;
  } catch (error) {
      alert("Erro ao obter o histórico do usuário: ", error);
  }
}
export async function getHistoricoTodosUsuarios() {
    try {
        const response = await conexaoAPI.get('/agua_ingerida/')
        return response.data;
    } catch (error) {
        alert("Erro ao obter os dados dos usuários: ", error)
    }
}