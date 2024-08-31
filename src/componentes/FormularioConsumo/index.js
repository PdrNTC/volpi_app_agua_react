import React from "react";
import InputRadio from "../InputRadio";

function FormularioConsumo({ id_usuario, quantidadeAgua, setQuantidadeAgua, handleSubmit }) {
    return (
        <form onSubmit={(evento) => handleSubmit(evento, id_usuario)}>
            <div>
                <label>
                    <InputRadio
                        name={`quantidade-${id_usuario}`}
                        value={250}
                        checked={quantidadeAgua === 250}
                        onChange={(evento) => setQuantidadeAgua(id_usuario, parseInt(evento.target.value))}
                    />
                    Copo pequeno 250ml
                </label>
            </div>

            <div>
                <label>
                    <InputRadio
                        name={`quantidade-${id_usuario}`}
                        value={350}
                        checked={quantidadeAgua === 350}
                        onChange={(evento) => setQuantidadeAgua(id_usuario, parseInt(evento.target.value))}
                    />
                    Copo médio 350ml
                </label>
            </div>

            <div>
                <label>
                    <InputRadio
                        name={`quantidade-${id_usuario}`}
                        value={500}
                        checked={quantidadeAgua === 500}
                        onChange={(evento) => setQuantidadeAgua(id_usuario, parseInt(evento.target.value))}
                    />
                    Garrafa média 500ml
                </label>
            </div>

            <button type="submit">Consumir</button>
        </form>
    );
}

export default FormularioConsumo;
