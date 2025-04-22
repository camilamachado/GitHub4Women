# 💬 Etapa 4 - Introdução ao GitHub Copilot

### 🧠 O que é o GitHub Copilot?

O **GitHub Copilot** é a primeira ferramenta de IA para desenvolvedores em escala mundial. Ele auxilia na escrita de código mais rapidamente, com menos esforço, atuando como um parceiro de programação inteligente diretamente no seu editor de código.

Desde o seu lançamento, os desenvolvedores relataram benefícios significativos:

- 🚀 **46%** do novo código é gerado por IA  
- ⏱️ **55%** de aumento na produtividade geral  
- 🎯 **74%** sentem-se mais focados em tarefas satisfatórias  

Alimentado pelo **OpenAI Codex**, um modelo treinado especificamente para entender e gerar código, o Copilot supera o GPT-3 em eficiência na geração de código.

---

### 🔧 Funcionalidades do GitHub Copilot

#### 💬 Copilot para Chat
Interface de chat integrada ao VS Code e Visual Studio, voltada para o fluxo de desenvolvimento. Permite interações com linguagem natural diretamente no editor.

#### 🔁 Copilot para Pull Requests
Gera descrições automáticas para PRs com base no código alterado. Recurso disponível via app do GitHub que pode ser instalado por admins ou donos de repositórios.

#### 💻 Copilot para a CLI
Gera comandos, loops e até comandos obscuros como `find`, otimizando tarefas na linha de comando.

---

### 💼 Planos de Assinatura

O GitHub Copilot está disponível nas seguintes versões:

- **Gratuito**: Para estudantes, mantenedores de projetos open source
- **Pro**: Para uso pessoal com funcionalidades completas
- **Business**: Para organizações
- **Enterprise**: Para empresas, com personalização, integração e segurança avançadas

---

### ⚙️ Como interagir com o Copilot

- **Sugestões embutidas**: Autocompletar em tempo real conforme você digita
- **Paleta de comandos**: `Ctrl+Shift+P > Copilot > Explicar Isto / Gerar Testes`
- **Chat do Copilot**: Comunique-se em linguagem natural no painel do IDE
- **Chat embutido**: Use `Ctrl+I` para iniciar uma conversa contextual direto no editor
- **Comentários no código**: Escreva a lógica desejada como comentário e pressione Enter
- **Várias sugestões**: Ícone de lâmpada para navegar entre opções alternativas
- **Explicações**: Clique com botão direito sobre um trecho de código > Copilot: Explicar Isto
- **Geração de testes**: Selecione uma função/classe e gere testes automaticamente via paleta de comandos

---

### 🛠️ Configurações no VS Code

#### Habilitar/Desabilitar o Copilot

1. No rodapé do VS Code, clique no ícone de status do Copilot  
2. Selecione "Habilitar" ou "Desabilitar"  
3. Para desabilitar por linguagem, escolha "Desabilitar preenchimentos para LANGUAGE"

#### Habilitar Sugestões Embutidas

1. Vá em `Arquivo > Preferências > Configurações`  
2. Selecione `Extensões > GitHub Copilot`  
3. Ative a opção **Editor: Enable Inline Suggestions**

---

### 🧩 Solução de Problemas

#### Ver logs – forma 1

1. Abra a paleta de comandos  
2. Busque por `Desenvolvedor: Abrir arquivo de log` ou `Abrir pasta de logs da extensão`

#### Ver logs – forma 2

1. Menu `Ajuda`  
2. Clique em `Ativar/desativar Ferramentas para Desenvolvedores`

#### Compartilhar Diagnóstico

1. Abra a paleta de comandos (`Ctrl+Shift+P`)  
2. Digite `Diagnóstico`  
3. Selecione `GitHub Copilot: Coletar diagnósticos`