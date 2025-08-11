//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function verificarAmigos(){
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome == ''){
        alert('Insira um nome válido!');
        return;
    }

    if(amigos.includes(nome)){
        alert('Esse amigo já foi adicionado!');
        return;
    }

    amigos.push(nome)
    input.value = '';
    atualizarLista();
    }

function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach(amigo => {
    let li = document.createElement('li');
    li.textContent = amigo;

    li.addEventListener('click', () => {
      amigos = amigos.filter(a => a !== amigo);
      atualizarLista();
    });

    lista.appendChild(li);
  });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Adicione pelo menos um amigo antes de sortear.')
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}



