# 🏢 Etapa 8 – Gerenciar um programa InnerSource

## 🔐 O que é InnerSource?

InnerSource é aplicar as **práticas do open source dentro da sua empresa**. Ou seja, os projetos funcionam como se fossem de código aberto (com colaboração aberta, pull requests, revisão de código), mas **acessíveis apenas internamente**.

---

## 🎯 Benefícios do InnerSource

- **Transparência**: qualquer desenvolvedor da empresa pode ver e reutilizar soluções.
- **Menos atrito**: contribuições externas são bem-vindas sem necessidade de negociações formais.
- **Padronização**: promove práticas comuns entre times de desenvolvimento.

---

## ⚙️ Como configurar um programa InnerSource no GitHub

### 🔎 Visibilidade dos repositórios

- **Público**: visível a todos (internos e externos).
- **Interno**: visível apenas dentro da organização → ideal para InnerSource.
- **Privado**: acesso restrito a indivíduos ou equipes específicas.

### 🧑‍💻 Permissões recomendadas

- **Leitura**: para quem só precisa consultar.
- **Triagem**: para gerenciar issues e PRs sem editar código.
- **Escrita**: para contribuições ativas.
- **Manutenção**: para gestão do projeto, sem permissões destrutivas.
- **Admin**: acesso total (inclui exclusão, segurança etc).

---

## 📂 Boas práticas para repositórios InnerSource

### Nome e descrição

- Use **nomes descritivos** (ex: `checkout-api`, `inventory-dashboard`).
- Escreva uma **descrição curta e clara** sobre o que o projeto faz.

### Arquivos essenciais

- **`LICENSE`**: informe como o código pode ser reutilizado.
- **`README.md`**:
  - Propósito e visão do projeto
  - Screenshots ou exemplos de código
  - Links para demos ou produção
  - Como instalar e rodar
  - Dependências

---

## 👥 Facilitando contribuições

### `CONTRIBUTING.md`

Explique como contribuir:
- Como abrir uma issue
- Convenções de código
- Regras de commit/pull request

### Templates de issues e PRs

- Use `.github/ISSUE_TEMPLATE.md` e `.github/PULL_REQUEST_TEMPLATE.md`
- Padroniza a forma como as pessoas relatam bugs ou sugerem mudanças

### Definir workflows

- Documente o fluxo de trabalho esperado:
  - Nomenclatura e uso de branches
  - Onde abrir PRs
  - Como sugerir melhorias ou correções

---

## 📊 Medindo o sucesso

🔁 **Métricas baseadas em processo, não só em resultado**

- Tempo médio de revisão de código
- Tamanho das PRs
- Tempo até merge
- Número de colaboradores únicos
- Reutilização de código entre projetos
- @menções entre times diferentes