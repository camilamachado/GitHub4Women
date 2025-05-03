# 🛠️ Etapa 12 – Gerenciar alterações de repositório usando solicitações de pull no GitHub

## 🌿 O que são ramificações?

* Ramificações são espaços de trabalho isolados que permitem desenvolver funcionalidades ou corrigir bugs sem afetar o código principal.
* Permitem experimentar com segurança novas ideias em áreas separadas do repositório.

## 🔀 Mesclando branches

* Eventualmente, as alterações feitas em uma ramificação devem ser integradas à `main` (ou outra base).
* Com o crescimento do projeto, aumentam as mesclagens e a necessidade de revisão cuidadosa.

## 📥 O que é uma solicitação de pull (pull request)?

* Uma **pull request (PR)** documenta e comunica que a ramificação está pronta para ser mesclada na ramificação base.
* Requisitos:

  * A ramificação de comparação (do desenvolvedor) deve ter diferenças em relação à ramificação base (geralmente `main`).

## 📊 Status das pull requests

* **Rascunho:** não pode ser mesclada; útil para sinalizar trabalho em andamento. Revisores não são notificados automaticamente.
* **Aberta:** ativa e pronta para discussão, revisão ou adição de novos commits.
* **Fechada:** encerrada sem ser mesclada; pode indicar que a mudança não é mais necessária.
* **Mesclada:** alterações foram incorporadas à ramificação base; exige permissão de push.

## 🧪 Estratégias de mesclagem

* **Compactar e mesclar (`Squash and merge`)**: une todos os commits da PR em um só. Mantém o histórico limpo e linear.
* **Trocar base e mesclar (`Rebase and merge`)**: reescreve os commits para inserir no topo da base, sem criar commit de mesclagem. Útil para manter histórico linear.
