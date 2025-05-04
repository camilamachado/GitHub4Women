### 🤖 Etapa 15 – GitHub Copilot com Python

Esta etapa explora o uso do **GitHub Copilot**, um assistente de inteligência artificial para desenvolvimento de software, integrado diretamente ao seu editor de código, como o VS Code. Ele entende instruções escritas em linguagem natural e sugere blocos de código com base nesses prompts.

#### 🧠 O que é o GitHub Copilot?

O **GitHub Copilot**:

* Gera código automaticamente a partir de comentários ou instruções em texto.
* Usa IA para prever o que você deseja implementar com base no contexto.
* Funciona dentro de arquivos `.py`, `.js`, Markdown e outros tipos compatíveis.
* É treinado em milhões de repositórios públicos.

#### ✍️ Como o Copilot reconhece prompts

O Copilot entende que você quer uma sugestão quando:

* Você escreve um **comentário** em um arquivo de código (por exemplo, `# Crie uma rota com FastAPI`).
* Você digita texto em um arquivo `.md` e aguarda alguns segundos.
* Ele responde com sugestões de código em cinza claro (em temas claros).

#### ✅ Como aceitar e navegar por sugestões

| Ação                     | Atalho         |
| ------------------------ | -------------- |
| Aceitar sugestão         | `Tab`          |
| Alternar entre sugestões | `Ctrl + Enter` |

#### 💡 Boas práticas ao usar o Copilot

* Comece com prompts simples e vá refinando.
* Exemplo inicial:
  `# Create an HTML form with a text field and button`
* Depois, adicione mais detalhes:
  `# Add an event listener to the button to send a POST request to /generate and display response in a div with id "result"`

#### 🌐 O que é uma API?

Uma **API** (Application Programming Interface) permite a comunicação entre sistemas.
Exemplo: um app de previsão do tempo pode usar a API de um serviço meteorológico para buscar e exibir dados atualizados.
