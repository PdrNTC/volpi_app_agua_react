import React from "react";
import InputRadio from "../InputRadio";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; /* Largura do formulário */
  margin: 0 auto;
  margin-bottom: 30px;
`;

const RadioContainer = styled.div`
  margin-bottom: 15px;
  width: 100%; /* Largura completa dentro do formulário */
`;

const Etiqueta = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 600;
  color: #333;
`;

const Botao = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function FormularioConsumo({ id_usuario, quantidadeAgua, setQuantidadeAgua, handleSubmit }) {
  return (
    <FormContainer onSubmit={(evento) => handleSubmit(evento, id_usuario)}>
      <RadioContainer>
        <Etiqueta>
          <InputRadio
            name={`quantidade-${id_usuario}`}
            value={250}
            checked={quantidadeAgua === 250}
            onChange={(evento) => setQuantidadeAgua(parseInt(evento.target.value))}
          />
          Copo pequeno 250ml
        </Etiqueta>
      </RadioContainer>

      <RadioContainer>
        <Etiqueta>
          <InputRadio
            name={`quantidade-${id_usuario}`}
            value={350}
            checked={quantidadeAgua === 350}
            onChange={(evento) => setQuantidadeAgua(parseInt(evento.target.value))}
          />
          Copo médio 350ml
        </Etiqueta>
      </RadioContainer>

      <RadioContainer>
        <Etiqueta>
          <InputRadio
            name={`quantidade-${id_usuario}`}
            value={500}
            checked={quantidadeAgua === 500}
            onChange={(evento) => setQuantidadeAgua(parseInt(evento.target.value))}
          />
          Garrafa média 500ml
        </Etiqueta>
      </RadioContainer>

      <Botao type="submit">Consumir</Botao>
    </FormContainer>
  );
}

export default FormularioConsumo;
