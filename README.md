 # Volpi water APP 💧

Frontend do app para Lembrar de Beber Água, proporciona uma experiência intuitiva e amigável. A interface permite aos usuários registrar o consumo diário de água ingerida, visualizar metas de acordo com o peso corporal e gerar relatórios dos consumos realizados por período.
 
***➡ Para acessar o Back End dessa aplicação: [Clique aqui](https://github.com/PdrNTC/volpi_api_agua)***

<br />

* ***Apresentação do uso da API em FrontEnd*** [Clique aqui]() 

<br />

## Funcionalidades Principais:

👤 Cadastro do Usuário (Tela 1):
- Implementei uma rota para que os usuários possam se cadastrar fornecendo seu nome, email, senha e peso em Kg.

🔑 Login do Usuário (Tela 2):
- Implementei um sistema de login seguro com email e senha.
- A API retorna tokens JWT após a autenticação bem-sucedida.

📊 Registro e Visualização do Consumo de Água (Tela 3):
- Desenvolvi funcionalidades que permitem aos usuários registrar a quantidade de água consumida.
- Após o registro, a API fornece dados em tempo real sobre o consumo atual, quantidade restante para atingir a meta diária, e se a meta já foi alcançada.

💧 Histórico de Consumo (Tela 4):
- Criei uma rota para que os usuários possam acessar o registro de dias anteriores.

📐 Cálculo da Meta Diária:
- A meta diária é calculada automaticamente com base no peso do usuário (em Kg) multiplicado por 35ml.


## Ferramentas utilizadas 🛠 
- React <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
- TypeScript <img align="center" alt="TypeScript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">
- VsCode <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"> 
