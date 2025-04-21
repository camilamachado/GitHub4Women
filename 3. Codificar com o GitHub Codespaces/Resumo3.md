# ⚙️ Etapa 3 – Explorando o GitHub Codespaces

Chegou a hora de turbinar seu ambiente de desenvolvimento com o poder da nuvem! Vamos entender como o **GitHub Codespaces** pode acelerar (e muito!) o seu fluxo de trabalho. 💻☁️

---

## 🚀 O que é o GitHub Codespaces?

O **GitHub Codespaces** é um ambiente de desenvolvimento instantâneo, baseado em contêineres e hospedado na nuvem. Ele já vem prontinho com linguagens, ferramentas e utilitários de desenvolvimento comuns — é só abrir e começar a codar!

---

## 🔄 Ciclo de vida do Codespace

Tudo começa com a **criação** de um Codespace e termina com a sua **exclusão**. Simples assim!  
Durante esse tempo, você pode abrir, pausar, retomar, recompilar e personalizar o ambiente como quiser.

---

## 🛠️ Como criar um Codespace?

Você pode criar um Codespace de quatro formas diferentes:

- 📦 A partir de um **template** ou repositório de modelo no GitHub  
- 🌱 A partir de um **branch** para iniciar uma nova feature  
- 🔍 A partir de um **pull request**, para revisar ou explorar o código  
- 🕵️‍♀️ A partir de um **commit específico**, para investigar um bug

---

## 💾 Como salvar alterações?

- ✅ **Via Web**: o salvamento automático já vem ativado  
- 🖥️ **Via VS Code**: você pode ativar o salvamento automático manualmente  

---

## 📂 Como abrir um Codespace existente?

Você pode retomar um Codespace diretamente por:

- Atalho `,` (vírgula) → **Retomar este Codespace**  
- Acesse: [github.com/codespaces](https://github.com/codespaces) e selecione o repositório e o Codespace desejado

---

## ⏳ Tempos limite e custos

- 🕒 **Timeout**: após **30 minutos de inatividade**, o Codespace é pausado  
- 💸 **Cobrança**: apenas Codespaces em execução geram custos de CPU. Pausados só geram custos de armazenamento.

---

## 🔁 Recompilar o Codespace

Ao recompilar o contêiner, **tudo fora do diretório `/workspaces` é limpo**. Fique atento pra não perder arquivos salvos fora da pasta principal!

---

## 🧹 Exclusão automática

- 💤 **Codespaces inativos** por mais de 30 dias são excluídos automaticamente  
- 📅 Você pode **configurar** esse tempo de retenção conforme sua preferência

---

## 🎛️ Personalizações disponíveis

Você pode deixar o Codespace com a sua cara com várias opções:

- ⚙️ **Sincronizar configurações** do VS Code (web ou desktop)
- 📁 **Dotfiles**: scripts, aliases e preferências de shell personalizadas  
- 📝 **Renomear** Codespace: ótimo pra se organizar melhor  
- 🐚 **Alterar o shell**: use Bash, Zsh, ou o shell que preferir  
- 🖥️ **Mudar o tipo de máquina**: ajuste CPU/RAM conforme a necessidade  
- 🧠 **Definir o editor padrão**:
  - VS Code (Web ou Desktop)  
  - JetBrains Gateway  
  - JupyterLab  

- 🌍 **Definir a região** dos seus dados  
- ⏱️ **Definir tempo limite** personalizado  
- 🗑️ **Configurar exclusão automática** com tempo de retenção de até 30 dias

---

## 🤔 Codespaces ou GitHub.dev?

| GitHub.dev | GitHub Codespaces |
|------------|-------------------|
| 👀 Navegar e editar código leve | 🧪 Executar, testar e depurar código |
| ☁️ Editor 100% web, sem backend | ⚙️ Ambiente completo, com backend e terminal |
| 📑 Alterações rápidas | 💥 Desenvolvimento completo |

---