# 📝 Etapa 6 – Comunicar-se efetivamente no GitHub usando Markdown

## 💡 O que é Markdown?

Markdown é uma linguagem de marcação simples que permite criar conteúdo formatado usando uma sintaxe limpa e legível. É muito usada em READMEs, issues, wikis e GitHub Pages.

---

## ✍️ **Formatação de Texto**

**Estilo** | **Sintaxe** | **Exemplo**
--|--|--
Itálico | `*texto*` ou `_texto_` | *texto*
Negrito | `**texto**` ou `__texto__` | **texto**
Ambos | `***texto***` | ***texto***
Escapar caractere | `\*texto\*` | \*texto\* (não formatado)

---

## 🧭 **Títulos (Cabeçalhos)**

Use `#` para criar títulos de níveis 1 a 6:

```
# Título 1  
## Título 2  
### Título 3  
#### Título 4  
##### Título 5  
###### Título 6
```

---

## 🔗 **Links e Imagens**

**Imagem:**

`![Descrição](/caminho/imagem.png)`

**Link:**

`[Texto do link](/caminho/pagina)`

---

## 📋 **Listas**

**Ordenadas:**

```
1. Primeiro item  
2. Segundo item  
3. Terceiro item
```

**Não ordenadas:**

```
- Primeiro item  
  - Subitem  
- Segundo item  
* Terceiro item
```

---

## 📊 **Tabelas**

```
| Coluna 1 | Coluna 2 |
|----------|----------|
| Valor 1  | Valor 2  |
```

---

## 💬 **Citações**

Use `>` para blocos de citação:

```
> Isso é uma citação.
```

---

## 🔧 **Blocos de Código**

**Inline:**

`` `código` ``

**Múltiplas linhas com destaque de linguagem:**

```
```csharp
Console.WriteLine("Olá!");
```
```

(⚠️ Em arquivos reais, remova os espaços e alinhe corretamente as crases para funcionar.)

---

## 🌐 **HTML Incorporado**

Você pode usar HTML direto no Markdown quando necessário:

```html
Aqui está uma<br />quebra de linha.
```

---

## 🔄 **Referência a Issues/Pull Requests**

- `#123`  
- `GH-123`  
- `usuario/repositorio#123`

---

## 👥 **Menções a Usuários**

Use `@usuario` para mencionar alguém.

---

## ✅ **Listas de Tarefas**

```
- [x] Tarefa concluída  
- [ ] Tarefa pendente
```

---

## ⚙️ **Comandos de Barra `/` (GitHub)**

| Comando        | Descrição                                                  |
|----------------|------------------------------------------------------------|
| `/code`        | Insere bloco de código com escolha da linguagem            |
| `/details`     | Cria bloco recolhível com título e conteúdo                |
| `/table`       | Cria uma tabela Markdown                                   |
| `/tasklist`    | Cria uma lista de tarefas (somente em issues)              |
| `/template`    | Insere um modelo salvo (PRs ou issues)                     |
| `/saved-replies` | Insere resposta salva com `%cursor%` para posicionamento |

---