function UsuariosInfo({ usuario }) {
    return (
        <div>
            <p>Meta do dia: {usuario.meta_diaria}ml</p>
            <p>Meta já consumida: {usuario.total_agua_ingerida}ml</p>
            <p>Meta restante: {usuario.quantidade_faltante}ml</p>
            <p>Chegou na meta hoje? {usuario.quantidade_faltante <= 0 ? 'SIM' : 'NÃO'}</p>
        </div>
    );
}

export default UsuariosInfo;