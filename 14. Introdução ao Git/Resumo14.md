### 🧰 Etapa 14 – Introdução ao Git

Esta etapa apresenta os fundamentos do Git, um sistema de controle de versão distribuído, e diferencia seu papel do GitHub, plataforma que o hospeda na nuvem.

#### 🗂️ O que é controle de versão?

Um **VCS** (Version Control System) permite:

* Rastrear alterações em arquivos e projetos.
* Recuperar versões anteriores.
* Trabalhar em **branches** isoladas.
* Colaborar com várias pessoas simultaneamente.

O **Git** é um VCS gratuito, rápido e distribuído, criado por Linus Torvalds (criador do Linux).

#### 🔁 Git distribuído

* O histórico completo fica disponível localmente e remotamente.
* Permite trabalhar offline.
* Sincronização com o repositório remoto ocorre via *push*/*pull*.
* O Git funciona sem servidor, embora isso não seja comum na prática.

#### 📘 Principais termos do Git

* **Árvore de trabalho:** conjunto de arquivos sendo editados.
* **Repositório:** diretório `.git` que armazena histórico e metadados.
* **Hash:** identificador único gerado para arquivos/commits.
* **Objeto:** estrutura interna como *blobs*, *trees*, *commits* e *tags*.
* **Commit:** registro de alterações com hash, autor, mensagem, etc.
* **Branch:** linha independente de commits; a principal costuma ser `main`.
* **HEAD:** ponteiro para o último commit da branch ativa.
* **Remoto:** repositório hospedado externamente, ex: `origin`.
* **Comando/Subcomando:** estrutura de instruções do Git, como `git commit`.

#### 🧭 Diferença entre Git e GitHub

* **Git**: ferramenta de controle de versão.
* **GitHub**: plataforma baseada em Git que oferece recursos adicionais:

  * Issues, Pull Requests, Actions, Forks, Labels, Notificações, Projetos e Discussões.

#### 🔧 Comandos básicos do Git

| Comando                              | Função                                                         |
| ------------------------------------ | -------------------------------------------------------------- |
| `git status`                         | Mostra o estado atual da árvore de trabalho e área de preparo. |
| `git add`                            | Adiciona alterações à área de preparo.                         |
| `git commit`                         | Registra as alterações preparadas no repositório.              |
| `git log`                            | Lista o histórico de commits com autor, data e mensagem.       |
| `git help` ou `git <comando> --help` | Abre a documentação sobre o Git ou um comando específico.      |

