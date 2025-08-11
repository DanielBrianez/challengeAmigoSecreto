🎉 Projeto Amigo Secreto 🎁

📝 Descrição
Este projeto é uma aplicação simples em JavaScript para gerenciar uma lista de amigos e realizar o sorteio do amigo secreto. O objetivo principal é praticar lógica de programação, manipulação do DOM e interação com o usuário.

🚀 Funcionalidades

➕ Adicionar nomes: Captura o nome digitado pelo usuário, valida se o campo não está vazio e se o nome não foi adicionado antes, adicionando-o a uma lista dinâmica.
📋 Listar amigos: Exibe a lista atualizada dos nomes adicionados.
❌ Remover nomes: Permite remover um nome da lista clicando sobre ele.
🎲 Sortear amigo secreto: Escolhe aleatoriamente um nome da lista e exibe o resultado na tela.

✅ Validações:

Evita adicionar nomes vazios ou duplicados.
Impede o sorteio se a lista estiver vazia.

💻 Tecnologias usadas

🌐 HTML5
🎨 CSS3 (para estilização)
⚙️ JavaScript (manipulação do DOM, arrays, eventos)

📂 Estrutura do código
1. Variável global

let amigos = [];

Armazena a lista de amigos adicionados.

2. Função verificarAmigos() / adicionarAmigo()

🔍 Captura o valor do input
✂️ Remove espaços extras com .trim()
🚫 Valida se o nome não está vazio
⚠️ Verifica se o nome já existe na lista para evitar duplicatas
➕ Adiciona o nome ao array
🧹 Limpa o campo de entrada
🔄 Atualiza a lista visualmente na página

3. Função atualizarLista()

🧹 Limpa a lista atual no DOM
🔄 Percorre o array amigos
➕ Cria elementos <li> para cada nome
❌ Adiciona evento de clique para remover o amigo da lista ao clicar no nome
🖥️ Atualiza a lista no DOM

4. Função sortearAmigo()

🔍 Verifica se a lista não está vazia
🎲 Sorteia um índice aleatório
📢 Exibe o nome sorteado no elemento de resultado

🎓 Aprendizados e conceitos aplicados
🏗️ Manipulação do DOM: Seleção de elementos, criação e remoção dinâmica de nós
🎯 Eventos: Uso do onclick no HTML e addEventListener no JS para interatividade
🛡️ Validação de entrada: Garantir dados corretos antes de manipular o array
📚 Arrays: Uso do .push(), .includes(), .filter() para gerenciar dados
🔧 Funções: Organização do código em funções reutilizáveis e claras
🔄 Controle de fluxo: Uso do if e return para controle e prevenção de erros
🎲 Randomização: Uso do Math.random() e Math.floor() para sorteio aleatório
🧹 Boas práticas: Uso do .trim(), nomes claros, evitar duplicatas e limpar campos após uso

🛠️ Como usar
🚀 Abra o arquivo index.html em um navegador moderno.
✍️ Digite nomes na caixa de texto e clique em “Adicionar”.
📋 A lista vai mostrar os nomes adicionados.
❌ Clique em qualquer nome da lista para removê-lo.
🎉 Clique em “Sortear amigo” para revelar um amigo secreto aleatório.

🎯 Próximos passos sugeridos
💾 Implementar persistência dos dados (localStorage ou backend)
✨ Adicionar estilo CSS para feedback visual nas interações
🎬 Melhorar a experiência do usuário com animações e mensagens dinâmicas
🚫 Impedir que o mesmo amigo seja sorteado múltiplas vezes
📤 Adicionar funcionalidade para exportar/importar lista de amigos