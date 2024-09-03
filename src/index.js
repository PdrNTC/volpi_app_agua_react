import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastrar from './routes/Cadastrar';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Header from './componentes/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Historico from './routes/Historico';
import Home from './routes/Home';

const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/dashboard/:id_usuario" element={<Dashboard/>} />
        <Route path="/historico/:id_usuario" element={<Historico/>} />
        <Route path="/cadastrar/" element={<Cadastrar/>} />
        <Route path="" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
