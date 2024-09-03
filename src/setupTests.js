import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './routes/Dashboard.js';
import { BrowserRouter } from 'react-router-dom';

test('renderiza o Dashboard e verifica o nome do usuário', async () => {
    render(
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    );

    // Verificar se o título é renderizado corretamente
    const tituloElement = screen.getByText(/Dashboard do usuário:/i);
    expect(tituloElement).toBeInTheDocument();

    // Simulando uma entrada de data e verificando
    const inputDate = screen.getByLabelText(/Selecione uma Data para registrar o consumo/i);
    fireEvent.change(inputDate, { target: { value: '2024-09-04' } });

    // Simulação de registro de consumo
    const botaoRegistrar = screen.getByText(/Registrar/i);
    fireEvent.click(botaoRegistrar);

    // Aqui você pode adicionar mais verificações
});

