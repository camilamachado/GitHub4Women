# 🔐 Etapa 11 – Autenticar e Autorizar Identidades

## 📘 Gerenciamento de Identidades e Acesso do Usuário

- Usuários podem acessar com login e senha, mas é **fortemente recomendado** habilitar a **2FA (autenticação de dois fatores)**.
- Utilizar o **SSO (Single Sign-On) via SAML** com um **IdP** aumenta a segurança no desenvolvimento.

## 🏢 Gerenciamento Organizacional com SSO SAML

- O **SSO SAML** permite acesso unificado a sistemas com um único login.
- Como administrador, você define e limita acessos conforme necessário.
- **IdPs suportados pelo GitHub**:
  - Active Directory Federation Services (AD FS)
  - Microsoft Entra ID
  - Okta
  - OneLogin
  - PingOne
  - Shibboleth

### ✅ Processo do SSO com SAML:
1. Conectar GitHub Enterprise a um IdP.
2. O usuário tenta acessar a organização → redirecionado ao IdP.
3. Após autenticação, retorna ao GitHub com acesso liberado.
4. O uso do SSO SAML pode (e deve) ser **imposto** na organização.

## 🔁 Autenticação Multifator (2FA)

- Requer login com senha + uma segunda forma de autenticação.
- Antes de exigir, os usuários devem **ativar a 2FA** em suas contas.

### 🔐 Métodos de 2FA:
- **TOTP (Time-based One-Time Password)** – Recomendado; mais seguro e confiável.
- **Chave de segurança** – Mais segura; exige TOTP ou SMS já configurado.
- **SMS** – Menos confiável; depende da disponibilidade regional.

### 📋 Auditoria de 2FA:
Acesse sua organização > aba **Pessoas** > opção **2FA** para ver quem ativou a autenticação multifator.

## 🔓 Autorização de Usuário

- Após autenticação, o usuário pode ser autorizado a acessar com:
  - **Token de Acesso Pessoal (PAT)**
  - **Chave SSH**
  - **Aplicativo OAuth**

### 🔗 Integração com SCIM:
- O **SCIM (System for Cross-domain Identity Management)** permite sincronizar dados de usuários entre o IdP e o GitHub.
- Para funcionar corretamente, os valores de `NameID` e `userName` devem coincidir entre SAML e SCIM.

### 🔑 Autorização com Chave SSH e PAT
- Vários métodos estão disponíveis para adicionar membros: via convite no GitHub ou via API.

## 👥 Sincronização de Equipes

- Disponível ao usar **Microsoft Entra ID** ou **Okta** como IdP.
- Permite sincronizar automaticamente equipes com grupos do IdP.

### 📄 Recursos da Sincronização:
| Recurso                          | Descrição                                                                 |
|----------------------------------|---------------------------------------------------------------------------|
| Sincronizar usuários             | Mantém membros do time alinhados aos grupos do IdP                        |
| Sincronizar nova equipe          | Cria equipes a partir de grupos existentes                                |
| Mapas personalizados             | Mapeamento opcional via `syncmap.yml`                                     |
| Configuração dinâmica            | Arquivo `settings` define sincronização entre AD e GitHub                |

### 🧑‍💼 Usuários Gerenciados pela Empresa
- Contas são **provisionadas e controladas** pelo IdP.
- Usuários **não criam suas próprias contas** no GitHub.
- A interação externa é **restrita**.

### 📊 Limites de Uso:
- Até **5.000 membros por equipe**
- Até **10.000 membros por organização**
- Até **1.500 equipes por organização**

### ⚙️ Habilitar Sincronização de Equipe

#### Microsoft Entra ID:
- Permissões necessárias:
  - Ler perfis completos dos usuários
  - Perfis de usuário para leitura
  - Ler dados do diretório

#### Okta:
- Requisitos:
  - Habilitar **SSO SAML** e **SCIM**
  - Informar a URL do locatário
  - Gerar um **token SSWS** com permissão de leitura administrativa

### ❌ Desabilitar Sincronização:
Acesse a organização → **Configurações > Segurança de autenticação > Desabilitar sincronização de equipe**