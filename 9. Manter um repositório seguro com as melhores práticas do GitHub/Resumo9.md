# 🛡️ Etapa 9 – Manter um repositório seguro

## 🔐 A importância de uma estratégia de desenvolvimento segura

Manter a segurança é mais do que proteger a produção — ela começa no código. Para isso, é essencial:

- **Educar continuamente**: segurança é uma área complexa e em constante evolução.
- **Escrever código seguro desde o início**: a segurança precisa estar presente já na concepção e implementação dos recursos.
- **Garantir conformidade**: o código deve atender às normas e regulamentos, mesmo após ser implantado.

---

## 🧪 Segurança em todas as etapas do desenvolvimento

A cultura DevOps e o conceito de **"shift left"** facilitam a integração de testes de segurança desde o início. O objetivo é trazer a segurança para mais perto dos desenvolvedores, com ferramentas e feedback direto no fluxo de trabalho.

---

## 🧰 Recursos de segurança integrados ao GitHub

A aba **Segurança** do GitHub permite adicionar funcionalidades que ajudam a prevenir vulnerabilidades no repositório:

- **`SECURITY.md`**: documento com diretrizes de como relatar vulnerabilidades.
- **Alertas do Dependabot**: notificações sobre pacotes com falhas conhecidas.
- **Avisos de segurança privados**: colaboração segura para correções antes da divulgação pública.
- **Varredura de código (Code scanning)**: identifica vulnerabilidades e erros no código.
- **Varredura de segredos (Secret scanning)**: detecta credenciais acidentalmente incluídas no repositório.

---

## 📁 Protegendo arquivos confidenciais

Use o **`.gitignore`** para garantir que arquivos sensíveis, como chaves de API e segredos, não sejam enviados ao repositório.

---

## 🔒 Proteção de branches

Aplique **regras de proteção de branch** para automatizar verificações antes do merge:

- Compilação e build
- Linters e validação de estilo
- Testes automatizados

---

## 👥 Definindo responsáveis com CODEOWNERS

O arquivo `CODEOWNERS` permite definir **quem precisa revisar** mudanças em áreas específicas do repositório, promovendo responsabilidade e qualidade no código.

---

## 📦 Lidando com dependências inseguras

### 📊 Grafo de dependências

- O GitHub analisa arquivos como `package.json`, `requirements.txt`, etc., e mapeia dependências do projeto.

### 🚨 Alertas do Dependabot

- Verifica se alguma dependência possui vulnerabilidades conhecidas e envia alertas automaticamente.

### 🔄 Atualizações automáticas

- O **Dependabot** pode abrir **pull requests automaticamente** para atualizar versões vulneráveis com correções seguras.

---

## 🕵️‍♀️ Análise de código e segredos

- **Verificação de código (Code scanning)**: ajuda a localizar e corrigir vulnerabilidades, inclusive com **CodeQL**, uma linguagem para consultar código como se fosse um banco de dados.
- **Verificação de segredos (Secret scanning)**: identifica tokens e credenciais expostos e notifica os provedores automaticamente.