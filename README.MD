# 🎉 Projeto Amigo Secreto 🎁

## 📝 Descrição
Aplicação simples em JavaScript para gerenciar uma lista de amigos e realizar o sorteio do amigo secreto.  
Objetivo principal: praticar lógica de programação, manipulação do DOM e interação com o usuário.

---

## 🚀 Funcionalidades
- Adicionar nomes: captura o nome digitado pelo usuário, valida se não está vazio e se não foi adicionado antes, adicionando à lista.  
- Listar amigos: exibe a lista atualizada de nomes adicionados.  
- Remover nomes: permite remover um nome da lista clicando sobre ele.  
- Sortear amigo secreto: escolhe aleatoriamente um nome da lista e exibe o resultado.

---

## ✅ Validações
- Evita adicionar nomes vazios ou duplicados.  
- Impede o sorteio se a lista estiver vazia.

---

## 💻 Tecnologias usadas
- HTML5  
- CSS3  
- JavaScript (manipulação do DOM, arrays, eventos)

---

## 📂 Estrutura do código
- Variável global:
```javascript
let amigos = [];
````

Armazena a lista de amigos adicionados.

* Função verificarAmigos() / adicionarAmigo():

  * Captura valor do input e remove espaços extras (.trim())
  * Valida se o nome não está vazio
  * Verifica se já existe na lista
  * Adiciona ao array e limpa o campo
  * Atualiza a lista visualmente na página

* Função atualizarLista():

  * Limpa a lista atual no DOM
  * Percorre o array amigos e cria elementos
  * Adiciona evento de clique para remover nomes
  * Atualiza a lista no DOM

* Função sortearAmigo():

  * Verifica se a lista não está vazia
  * Sorteia um índice aleatório
  * Exibe o nome sorteado no elemento de resultado

---

## 🎓 Aprendizados e conceitos aplicados

* Manipulação do DOM: seleção, criação e remoção dinâmica de elementos
* Eventos: uso do onclick e addEventListener para interatividade
* Validação de entrada: garantir dados corretos antes de manipular arrays
* Arrays: uso de push(), includes(), filter() para gerenciar dados
* Funções: organização do código em funções reutilizáveis
* Controle de fluxo: uso de if e return para controle e prevenção de erros
* Randomização: Math.random() e Math.floor() para sorteio aleatório
* Boas práticas: trim(), nomes claros, evitar duplicatas e limpar campos após uso

---

## 🛠️ Como usar

1. Abra o arquivo index.html em um navegador moderno.
2. Digite nomes na caixa de texto e clique em "Adicionar".
3. A lista mostrará os nomes adicionados.
4. Clique em qualquer nome da lista para removê-lo.
5. Clique em "Sortear amigo" para revelar um amigo secreto aleatório.

---

## 🎯 Próximos passos sugeridos

* Implementar persistência dos dados (localStorage ou backend)
* Adicionar feedback visual com CSS
* Melhorar a experiência do usuário com animações e mensagens dinâmicas
* Impedir que o mesmo amigo seja sorteado múltiplas vezes
* Adicionar funcionalidade para exportar/importar lista de amigos
