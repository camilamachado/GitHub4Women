### 🔍 Etapa 13 – Pesquisar e organizar o histórico do repositório usando o GitHub

Esta etapa apresenta os recursos de **pesquisa e rastreamento de histórico** no GitHub, ajudando a encontrar informações e entender a origem das alterações no código.

#### 🔎 Tipos de Pesquisa

* **Pesquisa global:** localizada na parte superior da interface, permite buscar em todo o GitHub — código, problemas, usuários, pull requests e mais.
* **Pesquisa com escopo (contextual):** disponível em guias específicas como *Issues* ou *Pull Requests*. Ela restringe os resultados ao repositório atual e ao tipo selecionado, com filtros como `author:`, `label:`, `assignee:`, etc.

#### 🧪 Exemplos de filtros úteis

| Consulta                                | Resultado                                                            |
| --------------------------------------- | -------------------------------------------------------------------- |
| `is:open is:issue assignee:@me`         | Issues abertas atribuídas a você                                     |
| `is:closed is:pr author:contoso`        | PRs fechadas criadas pelo usuário contoso                            |
| `is:pr sidebar in:comments`             | PRs com a palavra "sidebar" nos comentários                          |
| `is:open is:issue label:bug -linked:pr` | Issues abertas com o rótulo *bug* que não estão ligadas a nenhuma PR |

#### 🧾 `git blame`

Comando que mostra o histórico linha a linha de um arquivo, identificando quem modificou cada trecho e quando. Útil para rastrear contribuições e entender mudanças. Também pode ser chamado de `git praise` em alguns sistemas.

#### 🔗 Referências automáticas

* Comentários como `Duplicate of #8` criam links automáticos entre issues.
* Mencionar parte de um hash de commit (7+ caracteres) também gera link automático.

#### 👥 Menções com `@`

Use `@username` para envolver diretamente outros usuários nas discussões e revisões de código.
