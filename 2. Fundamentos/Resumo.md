# 🚀 Etapa 2 – Fundamentos do GitHub

## 🆚 Projetos x Projetos Clássicos

| 🔧 Recurso         | 🚀 Projects (Novo)                                    | 🏛️ Projects (Clássico)                               |
|--------------------|--------------------------------------------------------|-------------------------------------------------------|
| **Visual**         | Tabelas, quadros e layout de linha do tempo            | Só placas (boards) mesmo                             |
| **Organização**    | Campos personalizados (texto, número, data, iteração)  | Colunas e cartões                                     |
| **Insights**       | Gráficos atuais e históricos                           | Barra de progresso                                    |
| **Automação**      | API GraphQL, Actions e automações integradas          | Apenas predefinições de colunas                      |

---

## ✨ Como criar um projeto

Duas formas rapidinhas de criar:

1. `Your organizations` > `Overview` > `Projects` > `New Project` > `Start from scratch` > `Table`
2. `Your projects` > `New project`

Depois disso, bora configurar:

1. Dá um nome legal, uma descrição caprichada e preenche o README
2. Adiciona suas **issues** e **pull requests** ao projeto

👀 Dica esperta:
- Dá pra adicionar PRs e issues existentes
- Pode pesquisar por elas ou até adicionar em massa!

---

## 🧩 Como organizar seu projeto

### 🔥 Prioridade? Temos!

1. `New field` > Tipo: `Single select`
2. Crie opções como "Alta", "Média", "Baixa"
3. Salve!

Pra visualizar por prioridade:
- Clique na seta ↓ > `Agrupar por` > `Prioridade`

---

### 🕒 Iterações (hello, sprints!)

1. `New field` > Tipo: `Iteration`
2. Defina data de início e duração
3. Salve e organize suas entregas por fases ✨

---

### 🗂️ Quer um quadro estilo kanban?

1. Clique na seta ↓ > `Layout` > `Quadro`
2. Salve e organize seus cards como quiser 🎯

---

## 🔐 Como organizar e automatizar seu projeto

### 🔎 Visibilidade do Projeto

1. Projeto > `Configurações` > `Danger zone` > Mude a visibilidade do projeto

Níveis de acesso:

#### 🔸 Organização

- **Sem acesso** – só admins e quem for adicionado manualmente
- **Leitura** – todo mundo vê
- **Escrita** – todo mundo edita
- **Admin** – todo mundo manda em tudo

#### 🔹 Pessoal (usuário específico)

- **Leitura** – vê
- **Escrita** – vê e edita
- **Admin** – vê, edita e convida pessoas

---

### 🙋‍♀️ Colaboradores & Times

- Para convidar:  
  `Projeto` > `Configurações` > `Gerenciar Acesso` > `Convidar colaboradores`

- Para adicionar o projeto a uma equipe:  
  `Organizações` > `Nome da equipe` > `Projetos` > `Vincular projeto`

- Para vincular a um repositório:  
  `Repositório` > `Aba Projetos` > `Vincular um projeto`

---

### 💣 Fechar ou excluir um projeto

1. `Projeto` > `Configurações` > `Danger zone`

- **Fechar**: sai da lista de projetos, mas dá pra reabrir depois
- **Excluir**: 🧨 já era! Tudo é deletado permanentemente: campos, insights, visualizações, etc.

---

## 📊 Insights & Automação com Projetos

### 📈 Gráficos lindões

Você pode criar dois tipos:

- **Gráficos atuais**: mostram o agora (ex: tarefas por pessoa ou sprint)
- **Gráficos históricos**: mostram a evolução ao longo do tempo (só no GitHub Team e Enterprise)

Para criar:

1. `Projeto` > `Insights` > `Novo gráfico`

Para personalizar:

1. Clique no gráfico > `Configurar`
2. Use o menu `Layout` e, se quiser, `Agrupar por` algum campo

---

### ⚙️ Automatização

Três jeitos de automatizar:

- 🤖 Automação integrada (a mais fácil)
- 🧬 API GraphQL (para quem quer controle total)
- ⚙️ GitHub Actions (com workflows)

💡 Quer começar com automação integrada?

1. `Projeto` > `Fluxos de trabalho` > `Item adicionado ao projeto`
2. Clique em `Editar` > Escolha o gatilho (ex: quando for adicionado ao projeto)
3. Defina um valor > `Salvar` e ative!

---

E aí, bora colocar esse conhecimento em prática? 💪🚀