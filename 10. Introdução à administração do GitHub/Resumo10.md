# 🛠️ Etapa 10 – Introdução à Administração do GitHub

## 🏛️ Organização no GitHub

Organizações no GitHub servem como **estruturas de colaboração em grupo**, onde repositórios, permissões e configurações de segurança podem ser gerenciados centralmente.

---

## 👥 Gerenciando Equipes e Permissões

### 👤 Papéis de usuários

- **Proprietário da organização**: controle total (administração, segurança, faturamento).
- **Membro**: contribui com base nas permissões atribuídas.
- **Mantenedor de equipe**: pode adicionar/remover membros de times internos.

### 🧩 Permissões por nível

- **Admin**: acesso total ao repositório.
- **Manter**: gestão do repositório sem poder de exclusão.
- **Gravar**: push de commits, merge de PRs.
- **Triagem**: gerencia issues e PRs.
- **Leitura**: apenas visualização.

### 🧑‍🤝‍🧑 Equipes

- Organize colaboradores em **times com escopos e permissões próprias**.
- Times podem ser **aninhados** (subgrupos dentro de equipes maiores).

---

## 🔐 Segurança e autenticação

- **Autenticação de dois fatores (2FA)**: aumenta a segurança dos usuários.
- **Logon único (SSO)**: acesso ao GitHub por meio das credenciais corporativas.
- **Chaves SSH e Tokens de acesso pessoal (PATs)**: para autenticação segura em operações com o GitHub.

---

## 🧾 Governança e boas práticas

### 🧑‍🏫 CODEOWNERS

- Defina **proprietários de código** para arquivos ou pastas específicas.
- Exige que revisem e aprovem PRs automaticamente.

### 📄 Arquivos de metadados

- `README.md`, `LICENSE`, `CONTRIBUTING.md`, `SECURITY.md`: padronizam e comunicam o uso, contribuições e segurança.

### 🔄 Templates

- Templates de issues e pull requests ajudam a padronizar a colaboração.

---

## 🔄 Fluxo de trabalho e automação

- **Proteção de branches**:
  - Impede commits diretos.
  - Requer revisões obrigatórias.
  - Garante builds verdes antes do merge.

- **Workflows com GitHub Actions**:
  - Automatize linting, testes, deploy e validações.

---

## 📊 Visibilidade e monitoramento

- **Níveis de visibilidade**:
  - Público: aberto a todos.
  - Interno: apenas membros da organização.
  - Privado: acesso restrito a indivíduos ou times.

- **GitHub Audit Log**:
  - Rastreia atividades administrativas (como exclusão de repositórios, mudanças de permissão etc).

---

## 🚦 Dicas rápidas para admins

✅ Mantenha **2FA obrigatória** para todos os membros  
✅ Use **equipes e permissões mínimas necessárias**  
✅ Crie **branches protegidos** para código principal  
✅ Defina **proprietários de código com CODEOWNERS**  
✅ Automatize com **GitHub Actions e Dependabot**
