# Documentação do Desafio-Muralis-React

## Código da Aplicação Principal (App.js)

**Iniciar:** Para iniciar digite npm start em seu console.

**Descrição:** Este código representa a parte principal de uma aplicação React para cadastro de ingressantes. Ele inclui funcionalidades como preenchimento de dados como nome, curso, estado e cidade, gravação de dados e recarregamento da página.

**Estrutura do Código:**

1. **Construtor:**
   - Inicializa o estado com campos para nome, curso, estado e cidade.
   - Cria uma referência para o componente "EstadosCidades".

2. **Funções de Manipulação de Dados:**
   - `handleInputChange`: Atualiza o estado conforme o usuário preenche os campos.
   - `handleGravar`: Registra os dados no console, limpa os campos e reseta os campos no componente "EstadosCidades".
   - `handleVoltar`: Recarrega a página.

3. **Funções para Seleção de Estado e Cidade:**
   - `handleSelectEstado`: Atualiza o estado selecionado.
   - `handleSelectCidade`: Atualiza a cidade selecionada.

4. **Renderização:**
   - Renderiza um formulário com campos de nome, curso, seleção de estado e cidade.
   - Utiliza o componente "EstadosCidades" para a seleção de estado e cidade.
   - Botões para "Gravar" e "Voltar".

## Código do Componente de Estados e Cidades (EstadoCidade.js)

**Descrição:** Este código representa um componente React que permite ao usuário selecionar um estado e, com base nessa seleção, escolher uma cidade. Ele inclui dados de exemplo para estados e cidades.

**Estrutura do Código:**

5. **Função de Resetar Campos:**
   - `resetFields`: Reseta os campos de estado, cidade e lista de cidades.

6. **Construtor:**
   - Inicializa o estado do componente com campos para estado, cidade e uma lista de cidades vazia.

7. **Funções de Seleção de Estado e Cidade:**
   - `handleStateChange`: Atualiza o estado selecionado e a lista de cidades com base no estado selecionado.
   - `handleCityChange`: Atualiza a cidade selecionada.

8. **Renderização:**
   - Renderiza uma interface com campos de seleção para estado e cidade.
   - Os valores são preenchidos com dados de exemplo, que podem ser substituídos por valores reais.
   - Você pode inserir capturas de tela para mostrar como a interface aparece com diferentes seleções.

## Capturas de Tela do Sistema

- [Em branco]
  
  ![image](https://github.com/TeteuzinTeixeira/Muralis_React/assets/117493672/5d73e060-bc5d-4947-a6eb-3751ee86c40f)

- [Preenchido]

  ![image](https://github.com/TeteuzinTeixeira/Muralis_React/assets/117493672/0412c813-9ad4-4dd1-941c-2d6ba0cc06fd)

- [Console]

  ![image](https://github.com/TeteuzinTeixeira/Muralis_React/assets/117493672/e34eff2e-e434-4015-9399-d6eb2d0ec182)

